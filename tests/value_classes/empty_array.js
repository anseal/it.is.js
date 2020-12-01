export const empty_array_disabled_values = []
export const empty_array_values = [
	"(() => { const v = []; Object.defineProperty(v, Symbol.toStringTag, { get: () => { return \"ha-ha\"} }); return v })()",
	"[]",
	"new Array()",
	"new Array",
	"Array()",
	"another_realm(`(() => { const v = []; Object.defineProperty(v, Symbol.toStringTag, { get: () => { return \"ha-ha\"} }); return v })()`)",
	"another_realm(`[]`)",
	"another_realm(`new Array()`)",
	"another_realm(`new Array`)",
	"another_realm(`Array()`)",
	"another_realm(`new (class ArrayEx extends Array {})()`)",
	"another_realm(`new (class extends Array {})()`)",
	"new (class ArrayEx extends Array {})()",
	"new (class extends Array {})()"
]