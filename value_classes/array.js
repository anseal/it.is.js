export const array_disabled_values = []
export const array_values = [
	"(() => { const v = []; Object.defineProperty(v, Symbol.toStringTag, { get: () => { return \"ha-ha\"} }); return v })()",
	"[]",
	"new Array()",
	"new Array",
	"Array()",
	"[,1]",
	"[0]",
	"[1]",
	"another_realm(`(() => { const v = []; Object.defineProperty(v, Symbol.toStringTag, { get: () => { return \"ha-ha\"} }); return v })()`)",
	"another_realm(`[]`)",
	"another_realm(`new Array()`)",
	"another_realm(`new Array`)",
	"another_realm(`Array()`)",
	"another_realm(`[,1]`)",
	"another_realm(`[0]`)",
	"another_realm(`[1]`)",
	"another_realm(`new (class ArrayEx extends Array {})()`)",
	"another_realm(`new (class extends Array {})()`)",
	"another_realm(`new Array(2)`)",
	"new (class ArrayEx extends Array {})()",
	"new (class extends Array {})()",
	"new Array(2)"
]