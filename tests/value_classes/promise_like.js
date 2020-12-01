export const promise_like_disabled_values = []
export const promise_like_values = [
	"Promise.resolve()",
	"new Promise(() => {})",
	"another_realm(`Promise.resolve()`)",
	"another_realm(`new Promise(() => {})`)",
	"another_realm(`new (class PromiseEx extends Promise {})(() => {})`)",
	"another_realm(`new (class extends Promise {})(() => {})`)",
	"another_realm(`{ then: () => {} }`)",
	"new (class PromiseEx extends Promise {})(() => {})",
	"new (class extends Promise {})(() => {})",
	"{ then: () => {} }"
]