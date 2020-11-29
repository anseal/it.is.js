export const array_like_disabled_values = []
export const array_like_values = [
	"\"   \"",
	"String(\"   \")",
	"another_realm(`\"   \"`)",
	"another_realm(`String(\"   \")`)",
	"\"\"",
	"String()",
	"String(\"\")",
	"String([])",
	"another_realm(`\"\"`)",
	"another_realm(`String()`)",
	"another_realm(`String(\"\")`)",
	"another_realm(`String([])`)",
	"\"0\"",
	"String(\"0\")",
	"String([0])",
	"another_realm(`\"0\"`)",
	"another_realm(`String(\"0\")`)",
	"another_realm(`String([0])`)",
	"\"1\"",
	"String(\"1\")",
	"String([1])",
	"another_realm(`\"1\"`)",
	"another_realm(`String(\"1\")`)",
	"another_realm(`String([1])`)",
	"\"str\"",
	"\"NaN\"",
	"Date()",
	"String(null)",
	"String(undefined)",
	"String(true)",
	"String(false)",
	"String(\"str\")",
	"String(\"NaN\")",
	"String(new Array(2))",
	"String(/a/)",
	"another_realm(`\"str\"`)",
	"another_realm(`\"NaN\"`)",
	"another_realm(`Date()`)",
	"another_realm(`String(null)`)",
	"another_realm(`String(undefined)`)",
	"another_realm(`String(true)`)",
	"another_realm(`String(false)`)",
	"another_realm(`String(\"str\")`)",
	"another_realm(`String(\"NaN\")`)",
	"another_realm(`String(new Array(2))`)",
	"another_realm(`String(/a/)`)",
	"(() => { const v = []; Object.defineProperty(v, Symbol.toStringTag, { get: () => { return \"ha-ha\"} }); return v })()",
	"(function() { return arguments })()",
	"(function() { return arguments })(1)",
	"[]",
	"new Array()",
	"new Array",
	"Array()",
	"new String(\"   \")",
	"Object(\"   \")",
	"Object(String(\"   \"))",
	"new String()",
	"new String",
	"new String(\"\")",
	"new String([])",
	"Object(\"\")",
	"Object(String())",
	"Object(String(\"\"))",
	"Object(String([]))",
	"new String(\"0\")",
	"new String([0])",
	"Object(\"0\")",
	"Object(String(\"0\"))",
	"Object(String([0]))",
	"new String(\"1\")",
	"new String([1])",
	"Object(\"1\")",
	"Object(String(\"1\"))",
	"Object(String([1]))",
	"new String(null)",
	"new String(undefined)",
	"new String(true)",
	"new String(false)",
	"new String(\"str\")",
	"new String(\"NaN\")",
	"new String(new Array(2))",
	"new String(/a/)",
	"Object(\"str\")",
	"Object(\"NaN\")",
	"Object(Date())",
	"Object(String(null))",
	"Object(String(undefined))",
	"Object(String(true))",
	"Object(String(false))",
	"Object(String(\"str\"))",
	"Object(String(\"NaN\"))",
	"Object(String(new Array(2)))",
	"Object(String(/a/))",
	"Object.create(Object.create(Object.create([])))",
	"[,1]",
	"[0]",
	"[1]",
	"another_realm(`(() => { const v = []; Object.defineProperty(v, Symbol.toStringTag, { get: () => { return \"ha-ha\"} }); return v })()`)",
	"another_realm(`(function() { return arguments })()`)",
	"another_realm(`(function() { return arguments })(1)`)",
	"another_realm(`[]`)",
	"another_realm(`new Array()`)",
	"another_realm(`new Array`)",
	"another_realm(`Array()`)",
	"another_realm(`new String(\"   \")`)",
	"another_realm(`Object(\"   \")`)",
	"another_realm(`Object(String(\"   \"))`)",
	"another_realm(`new String()`)",
	"another_realm(`new String`)",
	"another_realm(`new String(\"\")`)",
	"another_realm(`new String([])`)",
	"another_realm(`Object(\"\")`)",
	"another_realm(`Object(String())`)",
	"another_realm(`Object(String(\"\"))`)",
	"another_realm(`Object(String([]))`)",
	"another_realm(`new String(\"0\")`)",
	"another_realm(`new String([0])`)",
	"another_realm(`Object(\"0\")`)",
	"another_realm(`Object(String(\"0\"))`)",
	"another_realm(`Object(String([0]))`)",
	"another_realm(`new String(\"1\")`)",
	"another_realm(`new String([1])`)",
	"another_realm(`Object(\"1\")`)",
	"another_realm(`Object(String(\"1\"))`)",
	"another_realm(`Object(String([1]))`)",
	"another_realm(`new String(null)`)",
	"another_realm(`new String(undefined)`)",
	"another_realm(`new String(true)`)",
	"another_realm(`new String(false)`)",
	"another_realm(`new String(\"str\")`)",
	"another_realm(`new String(\"NaN\")`)",
	"another_realm(`new String(new Array(2))`)",
	"another_realm(`new String(/a/)`)",
	"another_realm(`Object(\"str\")`)",
	"another_realm(`Object(\"NaN\")`)",
	"another_realm(`Object(Date())`)",
	"another_realm(`Object(String(null))`)",
	"another_realm(`Object(String(undefined))`)",
	"another_realm(`Object(String(true))`)",
	"another_realm(`Object(String(false))`)",
	"another_realm(`Object(String(\"str\"))`)",
	"another_realm(`Object(String(\"NaN\"))`)",
	"another_realm(`Object(String(new Array(2)))`)",
	"another_realm(`Object(String(/a/))`)",
	"another_realm(`Object.create(Object.create(Object.create([])))`)",
	"another_realm(`[,1]`)",
	"another_realm(`[0]`)",
	"another_realm(`[1]`)",
	"another_realm(`document.createTextNode(\"\")`)",
	"another_realm(`document.createTextNode(\"str\")`)",
	"another_realm(`document.forms`)",
	"another_realm(`document.querySelectorAll(\"div\")`)",
	"another_realm(`new (class ArrayEx extends Array {})()`)",
	"another_realm(`new (class extends Array {})()`)",
	"another_realm(`new (class BigInt64ArrayEx extends BigInt64Array {})()`)",
	"another_realm(`new (class extends BigInt64Array {})()`)",
	"another_realm(`new (class BigUint64ArrayEx extends BigUint64Array {})()`)",
	"another_realm(`new (class extends BigUint64Array {})()`)",
	"another_realm(`new (class Float32ArrayEx extends Float32Array {})()`)",
	"another_realm(`new (class extends Float32Array {})()`)",
	"another_realm(`new (class Float64ArrayEx extends Float64Array {})()`)",
	"another_realm(`new (class extends Float64Array {})()`)",
	"another_realm(`new (class Int16ArrayEx extends Int16Array {})()`)",
	"another_realm(`new (class extends Int16Array {})()`)",
	"another_realm(`new (class Int32ArrayEx extends Int32Array {})()`)",
	"another_realm(`new (class extends Int32Array {})()`)",
	"another_realm(`new (class Int8ArrayEx extends Int8Array {})()`)",
	"another_realm(`new (class extends Int8Array {})()`)",
	"another_realm(`new (class StringEx extends String {})()`)",
	"another_realm(`new (class extends String {})()`)",
	"another_realm(`new (class Uint16ArrayEx extends Uint16Array {})()`)",
	"another_realm(`new (class extends Uint16Array {})()`)",
	"another_realm(`new (class Uint32ArrayEx extends Uint32Array {})()`)",
	"another_realm(`new (class extends Uint32Array {})()`)",
	"another_realm(`new (class Uint8ArrayEx extends Uint8Array {})()`)",
	"another_realm(`new (class extends Uint8Array {})()`)",
	"another_realm(`new (class Uint8ClampedArrayEx extends Uint8ClampedArray {})()`)",
	"another_realm(`new (class extends Uint8ClampedArray {})()`)",
	"another_realm(`new WebAssembly.Table({initial:1, element:\"anyfunc\"})`)",
	"another_realm(`new (class WebAssembly_TableEx extends WebAssembly.Table {})({initial:1, element:\"anyfunc\"})`)",
	"another_realm(`new (class extends WebAssembly.Table {})({initial:1, element:\"anyfunc\"})`)",
	"another_realm(`new Array(2)`)",
	"another_realm(`new BigInt64Array()`)",
	"another_realm(`new BigInt64Array`)",
	"another_realm(`new BigUint64Array()`)",
	"another_realm(`new BigUint64Array`)",
	"another_realm(`new Float32Array()`)",
	"another_realm(`new Float32Array`)",
	"another_realm(`new Float32Array(1)`)",
	"another_realm(`new Float64Array()`)",
	"another_realm(`new Float64Array`)",
	"another_realm(`new Int16Array()`)",
	"another_realm(`new Int16Array`)",
	"another_realm(`new Int32Array()`)",
	"another_realm(`new Int32Array`)",
	"another_realm(`new Int8Array()`)",
	"another_realm(`new Int8Array`)",
	"another_realm(`new Uint16Array()`)",
	"another_realm(`new Uint16Array`)",
	"another_realm(`new Uint32Array()`)",
	"another_realm(`new Uint32Array`)",
	"another_realm(`new Uint8Array()`)",
	"another_realm(`new Uint8Array`)",
	"another_realm(`new Uint8ClampedArray()`)",
	"another_realm(`new Uint8ClampedArray`)",
	"another_realm(`window`)",
	"another_realm(`{ length: 1 }`)",
	"another_realm(`{ a: 1, length: 1 }`)",
	"another_realm(`{ 1: 1, length: 1 }`)",
	"another_realm(`{ 1: 1, 2: 2, length: 1 }`)",
	"another_realm(`{ length: 1.1 }`)",
	"another_realm(`{ length: NaN }`)",
	"document.createTextNode(\"\")",
	"document.createTextNode(\"str\")",
	"document.forms",
	"document.querySelectorAll(\"div\")",
	"new (class ArrayEx extends Array {})()",
	"new (class extends Array {})()",
	"new (class BigInt64ArrayEx extends BigInt64Array {})()",
	"new (class extends BigInt64Array {})()",
	"new (class BigUint64ArrayEx extends BigUint64Array {})()",
	"new (class extends BigUint64Array {})()",
	"new (class Float32ArrayEx extends Float32Array {})()",
	"new (class extends Float32Array {})()",
	"new (class Float64ArrayEx extends Float64Array {})()",
	"new (class extends Float64Array {})()",
	"new (class Int16ArrayEx extends Int16Array {})()",
	"new (class extends Int16Array {})()",
	"new (class Int32ArrayEx extends Int32Array {})()",
	"new (class extends Int32Array {})()",
	"new (class Int8ArrayEx extends Int8Array {})()",
	"new (class extends Int8Array {})()",
	"new (class StringEx extends String {})()",
	"new (class extends String {})()",
	"new (class Uint16ArrayEx extends Uint16Array {})()",
	"new (class extends Uint16Array {})()",
	"new (class Uint32ArrayEx extends Uint32Array {})()",
	"new (class extends Uint32Array {})()",
	"new (class Uint8ArrayEx extends Uint8Array {})()",
	"new (class extends Uint8Array {})()",
	"new (class Uint8ClampedArrayEx extends Uint8ClampedArray {})()",
	"new (class extends Uint8ClampedArray {})()",
	"new WebAssembly.Table({initial:1, element:\"anyfunc\"})",
	"new (class WebAssembly_TableEx extends WebAssembly.Table {})({initial:1, element:\"anyfunc\"})",
	"new (class extends WebAssembly.Table {})({initial:1, element:\"anyfunc\"})",
	"new Array(2)",
	"new BigInt64Array()",
	"new BigInt64Array",
	"new BigUint64Array()",
	"new BigUint64Array",
	"new Float32Array()",
	"new Float32Array",
	"new Float32Array(1)",
	"new Float64Array()",
	"new Float64Array",
	"new Int16Array()",
	"new Int16Array",
	"new Int32Array()",
	"new Int32Array",
	"new Int8Array()",
	"new Int8Array",
	"new Uint16Array()",
	"new Uint16Array",
	"new Uint32Array()",
	"new Uint32Array",
	"new Uint8Array()",
	"new Uint8Array",
	"new Uint8ClampedArray()",
	"new Uint8ClampedArray",
	"window",
	"{ length: 1 }",
	"{ a: 1, length: 1 }",
	"{ 1: 1, length: 1 }",
	"{ 1: 1, 2: 2, length: 1 }",
	"{ length: 1.1 }",
	"{ length: NaN }"
]