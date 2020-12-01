import { interesting_values } from "./interesting_values.js"
import { make_live_value    } from "./make_live_value.js"

const all_values = new Map(interesting_values.map(val_str => [ val_str, make_live_value(val_str) ]))

export function test(name, fn, true_values, disabled_values) {
	true_values     = new Set(true_values)
	disabled_values = new Set(disabled_values)

	const errors = []
	const errors_in_disabled = []
	let cnt_checked = 0

	for(const [val_str, live_value] of all_values) {
		if( live_value.error ) continue
		++cnt_checked

		let res
		try { res = fn(live_value.value) } catch(e) { res = e }

		if( res !== true_values.has(val_str) ) {
			if( disabled_values.has(val_str) ) errors_in_disabled.push([val_str, res])
			else errors.push([val_str, res])
		}
	}

	const log_errors = errors => errors.forEach(([val_str, res]) => console.warn(`       ${name}(${val_str}): expected \`${true_values.has(val_str)}\`. Got ${res}`))

	if( errors.length ) {
		console.error(`FAILED ${name}()`)
		log_errors(errors)
		return false
	} else {
		console.log(`OK     ${name}(). Checked ${cnt_checked} values. ${(errors_in_disabled.length ? `But there're errors in disabled values` : "")}`)
		log_errors(errors_in_disabled)
		return true
	}
}
