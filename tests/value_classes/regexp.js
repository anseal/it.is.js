export const regexp_disabled_values = []
export const regexp_values = [
	"/a/",
	"/a/g",
	"/a/gi",
	"/(?:)/",
	"new RegExp()",
	"new RegExp",
	"RegExp()",
	"RegExp(\"\")",
	"RegExp(\"a\")",
	"RegExp(/a/)",
	"another_realm(`/a/`)",
	"another_realm(`/a/g`)",
	"another_realm(`/a/gi`)",
	"another_realm(`/(?:)/`)",
	"another_realm(`new RegExp()`)",
	"another_realm(`new RegExp`)",
	"another_realm(`RegExp()`)",
	"another_realm(`RegExp(\"\")`)",
	"another_realm(`RegExp(\"a\")`)",
	"another_realm(`RegExp(/a/)`)",
	"another_realm(`new (class RegExpEx extends RegExp {})()`)",
	"another_realm(`new (class extends RegExp {})()`)",
	"new (class RegExpEx extends RegExp {})()",
	"new (class extends RegExp {})()"
]