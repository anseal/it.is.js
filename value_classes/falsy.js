export const falsy_disabled_values = []
export const falsy_values = [
	"\"\"",
	"String()",
	"String(\"\")",
	"String([])",
	"another_realm(`\"\"`)",
	"another_realm(`String()`)",
	"another_realm(`String(\"\")`)",
	"another_realm(`String([])`)",
	"0",
	"+0",
	"Number()",
	"another_realm(`0`)",
	"another_realm(`+0`)",
	"another_realm(`Number()`)",
	"-0",
	"another_realm(`-0`)",
	"BigInt(-0)",
	"BigInt(0)",
	"BigInt(+0)",
	"-0n",
	"0n",
	"another_realm(`BigInt(-0)`)",
	"another_realm(`BigInt(0)`)",
	"another_realm(`BigInt(+0)`)",
	"another_realm(`-0n`)",
	"another_realm(`0n`)",
	"false",
	"Boolean()",
	"another_realm(`false`)",
	"another_realm(`Boolean()`)",
	"NaN",
	"another_realm(`NaN`)",
	"null",
	"another_realm(`null`)",
	"undefined"
]