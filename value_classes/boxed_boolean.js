export const boxed_boolean_disabled_values = []
export const boxed_boolean_values = [
	"new Boolean()",
	"new Boolean",
	"Object(false)",
	"Object(Boolean())",
	"Object(true)",
	"another_realm(`new Boolean()`)",
	"another_realm(`new Boolean`)",
	"another_realm(`Object(false)`)",
	"another_realm(`Object(Boolean())`)",
	"another_realm(`Object(true)`)",
	"another_realm(`new (class BooleanEx extends Boolean {})()`)",
	"another_realm(`new (class extends Boolean {})()`)",
	"new (class BooleanEx extends Boolean {})()",
	"new (class extends Boolean {})()"
]