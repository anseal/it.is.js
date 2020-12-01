import * as module_value  from "./module_value.js"
import { hidden_symbols } from "../special_symbols.js"

// `GeneratorFunction` etc - the objects that is not in `globalThis`
const hidden_symbols_keys   = Object.keys  (hidden_symbols)
const hidden_symbols_values = Object.values(hidden_symbols).map(([live_value]) => live_value)

// for performance stress tests only
const BIG_N = 1000

/*	`live_value`s can be anything including `Error`s, but to distinguish Error-values from failure of `live_value` creation
	(as a result of errors in the code-string or as a result of environment pecularities) we need to store
	creation errors in a separate field - `this._error`
	And to FailFast it is required to check for errors first before accessing this._value
	*/
class t_live_value {
	constructor(v, e) {
		this._value = v
		this._error = e
	}
	get value() {
		if( this._error ) throw new Error("there is error in live_value")
		return this._value
	}
	get error() {
		return this._error
	}
}

export const make_live_value = val_str => {
	let live_value = undefined
	let error_msg  = undefined
	try {
		live_value = Function("another_realm", "module", "BIG_N", ...hidden_symbols_keys,
			`return ${val_str}`
		)( another_realm, module_value, BIG_N, ...hidden_symbols_values, )
		if( live_value === undefined && val_str !== "undefined" ) throw new Error(`"${val_str}" is absent`)
	} catch(e) {
		error_msg = e.message
	}

	return new t_live_value(live_value, error_msg)
		// Only one value get into the `new t_live_value`. Either `live_value` or `error_msg`
}

/*	Analog of `make_live_value`, but to create values in another realm.
	Called inside of `make_live_value` when `val_str` has a form of "another_realm(`some_code`)".
	Result is handled inside of `make_live_value`.

	`hidden_symbols` "imported" as a string because `import { hidden_symbols } from "./special_symbols.js"`
	whould be async inside of iframe, and that complicates things.
	live_value === another_realm(`module`) is not supported, but that's good enough.
	*/
const make_live_value_in_another_realm_str = `
	${Object.entries(hidden_symbols).map(([key, [ live_val, str_val ]]) => `const ${key} = ${str_val}`).join("\n")}
	globalThis.make_live_value = val_str => {
		try {
			globalThis.live_value = Function("BIG_N",
				${'"' + hidden_symbols_keys.join('","') + '"'},
				"return " + val_str
			)(BIG_N, ${hidden_symbols_keys.join(",")})
		} catch(e) {
			globalThis.live_value_error = e
		}
	}
`

let another_realm_context

if( globalThis.document ) {

	const iframe = document.createElement('iframe')
	iframe.style.display = "none"
	document.body.appendChild(iframe)
	iframe.contentWindow.BIG_N = BIG_N
	iframe.contentWindow.document.write(
		`<html><body><script type="text/javascript">${make_live_value_in_another_realm_str}</script></body></html>`
	)
	another_realm_context = iframe.contentWindow

} else {

	const vm = globalThis.vm // imported in import_vm.js
	vm.createContext(another_realm_context = { BIG_N })
	vm.runInContext(
		make_live_value_in_another_realm_str,
		another_realm_context
	)

}

function another_realm(val_str) {
	another_realm_context.live_value_error = undefined
		// important, because context is reused
	another_realm_context.live_value       = undefined
		// same reason, but not really needed
	another_realm_context.make_live_value(val_str)
	if( another_realm_context.live_value_error ) throw another_realm_context.live_value_error
	return another_realm_context.live_value
}
