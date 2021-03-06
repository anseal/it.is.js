export const object_disabled_values = []
export const object_values = [
	"(() => { const v = []; Object.defineProperty(v, Symbol.toStringTag, { get: () => { return \"ha-ha\"} }); return v })()",
	"(async function* a_gen() { yield 1 })()",
	"(function() { return arguments })()",
	"(function() { return arguments })(1)",
	"(function* gen() { yield 1 })()",
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
	"[]",
	"new Array()",
	"new Array",
	"Array()",
	"AsyncGenerator",
	"Atomics",
	"new Error()",
	"new Error",
	"Error()",
	"Error(\"\")",
	"Error(\"str\")",
	"new Error(\"\")",
	"new Error(\"str\")",
	"new EvalError()",
	"new EvalError",
	"EvalError()",
	"Generator",
	"Intl",
	"new Intl.Collator()",
	"new Intl.Collator",
	"Intl.Collator()",
	"new Intl.DateTimeFormat()",
	"new Intl.DateTimeFormat",
	"Intl.DateTimeFormat()",
	"new Intl.NumberFormat()",
	"new Intl.NumberFormat",
	"Intl.NumberFormat()",
	"JSON",
	"Math",
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
	"new Proxy({}, {})",
	"new Object()",
	"new Object",
	"Object()",
	"{}",
	"Object.create(Object.prototype)",
	"Object(null)",
	"Object(undefined)",
	"new Number()",
	"new Number",
	"Object(-0)",
	"Object(0)",
	"Object(+0)",
	"Object(Number())",
	"Object(+Number.MIN_VALUE)",
	"Object(+Number.EPSILON)",
	"Object(+0.1)",
	"Object(+1)",
	"Object(+1.0)",
	"Object(1)",
	"Object(Number.MAX_SAFE_INTEGER-1)",
	"Object(+Number.MAX_SAFE_INTEGER)",
	"Object(+Infinity)",
	"Object(Number.MAX_SAFE_INTEGER+1)",
	"Object(Number.MAX_VALUE-1)",
	"Object(+Number.MAX_VALUE)",
	"Object(Number.MAX_VALUE+1)",
	"Object(-0.1)",
	"Object(-Number.EPSILON)",
	"Object(-Number.MIN_VALUE)",
	"Object(BigInt(-0))",
	"Object(BigInt(0))",
	"Object(BigInt(+0))",
	"Object(-0n)",
	"Object(0n)",
	"Object(Number.MIN_SAFE_INTEGER)",
	"Object(Number.MIN_SAFE_INTEGER+1)",
	"Object(-1)",
	"Object(BigInt(-Number.MAX_VALUE-1))",
	"Object(BigInt(-Number.MAX_VALUE))",
	"Object(BigInt(-Number.MAX_VALUE+1))",
	"Object(BigInt(Number.MIN_SAFE_INTEGER-1))",
	"Object(BigInt(Number.MIN_SAFE_INTEGER))",
	"Object(BigInt(Number.MIN_SAFE_INTEGER+1))",
	"Object(BigInt(-1))",
	"Object(-1n)",
	"Object(-Infinity)",
	"Object(-Number.MAX_VALUE-1)",
	"Object(-Number.MAX_VALUE)",
	"Object(-Number.MAX_VALUE+1)",
	"Object(Number.MIN_SAFE_INTEGER-1)",
	"Object(BigInt(+1))",
	"Object(BigInt(+1.0))",
	"Object(BigInt(1))",
	"Object(BigInt(Number.MAX_SAFE_INTEGER-1))",
	"Object(BigInt(+Number.MAX_SAFE_INTEGER))",
	"Object(1n)",
	"Object(BigInt(Number.MAX_SAFE_INTEGER+1))",
	"Object(BigInt(Number.MAX_VALUE-1))",
	"Object(BigInt(+Number.MAX_VALUE))",
	"Object(BigInt(Number.MAX_VALUE+1))",
	"new Boolean()",
	"new Boolean",
	"Object(false)",
	"Object(Boolean())",
	"Object(NaN)",
	"Object(Symbol())",
	"Object(Symbol(\"\"))",
	"Object(Symbol(\"str\"))",
	"Object(Symbol.for(\"symbol\"))",
	"Object(Symbol.iterator)",
	"Object(true)",
	"Object.create(Object.create(Object.create([])))",
	"Object.create({})",
	"Object.create(Object.create(Object.create({})))",
	"Object.create(null)",
	"another_realm(`Object.create(null)`)",
	"Object.freeze(Object(NaN))",
	"Object.freeze({a:1})",
	"Object.preventExtensions({a:1})",
	"Object.seal({a:1})",
	"Promise.resolve()",
	"new Promise(() => {})",
	"new RangeError()",
	"new RangeError",
	"RangeError()",
	"new ReferenceError()",
	"new ReferenceError",
	"ReferenceError()",
	"Reflect",
	"new SyntaxError()",
	"new SyntaxError",
	"SyntaxError()",
	"new TypeError()",
	"new TypeError",
	"TypeError()",
	"new URIError()",
	"new URIError",
	"URIError()",
	"WebAssembly",
	"new WebAssembly.CompileError()",
	"new WebAssembly.CompileError",
	"WebAssembly.CompileError()",
	"new WebAssembly.LinkError()",
	"new WebAssembly.LinkError",
	"WebAssembly.LinkError()",
	"new WebAssembly.RuntimeError()",
	"new WebAssembly.RuntimeError",
	"WebAssembly.RuntimeError()",
	"[,1]",
	"[0]",
	"[1]",
	"another_realm(`(() => { const v = []; Object.defineProperty(v, Symbol.toStringTag, { get: () => { return \"ha-ha\"} }); return v })()`)",
	"another_realm(`(async function* a_gen() { yield 1 })()`)",
	"another_realm(`(function() { return arguments })()`)",
	"another_realm(`(function() { return arguments })(1)`)",
	"another_realm(`(function* gen() { yield 1 })()`)",
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
	"another_realm(`[]`)",
	"another_realm(`new Array()`)",
	"another_realm(`new Array`)",
	"another_realm(`Array()`)",
	"another_realm(`AsyncGenerator`)",
	"another_realm(`Atomics`)",
	"another_realm(`new AggregateError(\"\")`)",
	"another_realm(`new Error()`)",
	"another_realm(`new EvalError()`)",
	"another_realm(`new RangeError()`)",
	"another_realm(`new ReferenceError()`)",
	"another_realm(`new SyntaxError()`)",
	"another_realm(`new TypeError()`)",
	"another_realm(`new URIError()`)",
	"another_realm(`new WebAssembly.CompileError()`)",
	"another_realm(`new WebAssembly.LinkError()`)",
	"another_realm(`new WebAssembly.RuntimeError()`)",
	"another_realm(`new Error`)",
	"another_realm(`new EvalError`)",
	"another_realm(`new RangeError`)",
	"another_realm(`new ReferenceError`)",
	"another_realm(`new SyntaxError`)",
	"another_realm(`new TypeError`)",
	"another_realm(`new URIError`)",
	"another_realm(`new WebAssembly.CompileError`)",
	"another_realm(`new WebAssembly.LinkError`)",
	"another_realm(`new WebAssembly.RuntimeError`)",
	"another_realm(`Error()`)",
	"another_realm(`EvalError()`)",
	"another_realm(`RangeError()`)",
	"another_realm(`ReferenceError()`)",
	"another_realm(`SyntaxError()`)",
	"another_realm(`TypeError()`)",
	"another_realm(`URIError()`)",
	"another_realm(`WebAssembly.CompileError()`)",
	"another_realm(`WebAssembly.LinkError()`)",
	"another_realm(`WebAssembly.RuntimeError()`)",
	"another_realm(`Error(\"\")`)",
	"another_realm(`Error(\"str\")`)",
	"another_realm(`new Error(\"\")`)",
	"another_realm(`new Error(\"str\")`)",
	"another_realm(`Generator`)",
	"another_realm(`new Intl.Collator()`)",
	"another_realm(`new Intl.Collator`)",
	"another_realm(`Intl.Collator()`)",
	"another_realm(`new Intl.DateTimeFormat()`)",
	"another_realm(`new Intl.DateTimeFormat`)",
	"another_realm(`Intl.DateTimeFormat()`)",
	"another_realm(`new Intl.NumberFormat()`)",
	"another_realm(`new Intl.NumberFormat`)",
	"another_realm(`Intl.NumberFormat()`)",
	"another_realm(`Intl`)",
	"another_realm(`JSON`)",
	"another_realm(`Math`)",
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
	"another_realm(`new Proxy({}, {})`)",
	"another_realm(`new Object()`)",
	"another_realm(`new Object`)",
	"another_realm(`Object()`)",
	"another_realm(`{}`)",
	"another_realm(`Object.create(Object.prototype)`)",
	"another_realm(`Object(null)`)",
	"another_realm(`Object(undefined)`)",
	"another_realm(`new Number()`)",
	"another_realm(`new Number`)",
	"another_realm(`Object(-0)`)",
	"another_realm(`Object(0)`)",
	"another_realm(`Object(+0)`)",
	"another_realm(`Object(Number())`)",
	"another_realm(`Object(+Number.MIN_VALUE)`)",
	"another_realm(`Object(+Number.EPSILON)`)",
	"another_realm(`Object(+0.1)`)",
	"another_realm(`Object(+1)`)",
	"another_realm(`Object(+1.0)`)",
	"another_realm(`Object(1)`)",
	"another_realm(`Object(Number.MAX_SAFE_INTEGER-1)`)",
	"another_realm(`Object(+Number.MAX_SAFE_INTEGER)`)",
	"another_realm(`Object(+Infinity)`)",
	"another_realm(`Object(Number.MAX_SAFE_INTEGER+1)`)",
	"another_realm(`Object(Number.MAX_VALUE-1)`)",
	"another_realm(`Object(+Number.MAX_VALUE)`)",
	"another_realm(`Object(Number.MAX_VALUE+1)`)",
	"another_realm(`Object(-0.1)`)",
	"another_realm(`Object(-Number.EPSILON)`)",
	"another_realm(`Object(-Number.MIN_VALUE)`)",
	"another_realm(`Object(BigInt(-0))`)",
	"another_realm(`Object(BigInt(0))`)",
	"another_realm(`Object(BigInt(+0))`)",
	"another_realm(`Object(-0n)`)",
	"another_realm(`Object(0n)`)",
	"another_realm(`Object(Number.MIN_SAFE_INTEGER)`)",
	"another_realm(`Object(Number.MIN_SAFE_INTEGER+1)`)",
	"another_realm(`Object(-1)`)",
	"another_realm(`Object(BigInt(-Number.MAX_VALUE-1))`)",
	"another_realm(`Object(BigInt(-Number.MAX_VALUE))`)",
	"another_realm(`Object(BigInt(-Number.MAX_VALUE+1))`)",
	"another_realm(`Object(BigInt(Number.MIN_SAFE_INTEGER-1))`)",
	"another_realm(`Object(BigInt(Number.MIN_SAFE_INTEGER))`)",
	"another_realm(`Object(BigInt(Number.MIN_SAFE_INTEGER+1))`)",
	"another_realm(`Object(BigInt(-1))`)",
	"another_realm(`Object(-1n)`)",
	"another_realm(`Object(-Infinity)`)",
	"another_realm(`Object(-Number.MAX_VALUE-1)`)",
	"another_realm(`Object(-Number.MAX_VALUE)`)",
	"another_realm(`Object(-Number.MAX_VALUE+1)`)",
	"another_realm(`Object(Number.MIN_SAFE_INTEGER-1)`)",
	"another_realm(`Object(BigInt(+1))`)",
	"another_realm(`Object(BigInt(+1.0))`)",
	"another_realm(`Object(BigInt(1))`)",
	"another_realm(`Object(BigInt(Number.MAX_SAFE_INTEGER-1))`)",
	"another_realm(`Object(BigInt(+Number.MAX_SAFE_INTEGER))`)",
	"another_realm(`Object(1n)`)",
	"another_realm(`Object(BigInt(Number.MAX_SAFE_INTEGER+1))`)",
	"another_realm(`Object(BigInt(Number.MAX_VALUE-1))`)",
	"another_realm(`Object(BigInt(+Number.MAX_VALUE))`)",
	"another_realm(`Object(BigInt(Number.MAX_VALUE+1))`)",
	"another_realm(`new Boolean()`)",
	"another_realm(`new Boolean`)",
	"another_realm(`Object(false)`)",
	"another_realm(`Object(Boolean())`)",
	"another_realm(`Object(NaN)`)",
	"another_realm(`Object(Symbol())`)",
	"another_realm(`Object(Symbol(\"\"))`)",
	"another_realm(`Object(Symbol(\"str\"))`)",
	"another_realm(`Object(Symbol.for(\"symbol\"))`)",
	"another_realm(`Object(Symbol.iterator)`)",
	"another_realm(`Object(true)`)",
	"another_realm(`Object.create(Object.create(Object.create([])))`)",
	"another_realm(`Object.create({})`)",
	"another_realm(`Object.create(Object.create(Object.create({})))`)",
	"another_realm(`Object.freeze(Object(NaN))`)",
	"another_realm(`Object.freeze({a:1})`)",
	"another_realm(`Object.preventExtensions({a:1})`)",
	"another_realm(`Object.seal({a:1})`)",
	"another_realm(`Promise.resolve()`)",
	"another_realm(`new Promise(() => {})`)",
	"another_realm(`Reflect`)",
	"another_realm(`WebAssembly`)",
	"another_realm(`[,1]`)",
	"another_realm(`[0]`)",
	"another_realm(`[1]`)",
	"another_realm(`document.createElement(\"custom_tag\")`)",
	"another_realm(`document.createElement(\"div\")`)",
	"another_realm(`document.createTextNode(\"\")`)",
	"another_realm(`document.createTextNode(\"str\")`)",
	"another_realm(`document.forms`)",
	"another_realm(`document.querySelectorAll(\"div\")`)",
	"another_realm(`document`)",
	"another_realm(`new (class ErrorEx extends Error {})()`)",
	"another_realm(`new (class EvalErrorEx extends EvalError {})()`)",
	"another_realm(`new (class RangeErrorEx extends RangeError {})()`)",
	"another_realm(`new (class ReferenceErrorEx extends ReferenceError {})()`)",
	"another_realm(`new (class SyntaxErrorEx extends SyntaxError {})()`)",
	"another_realm(`new (class TypeErrorEx extends TypeError {})()`)",
	"another_realm(`new (class URIErrorEx extends URIError {})()`)",
	"another_realm(`new (class WebAssembly_CompileErrorEx extends WebAssembly.CompileError {})()`)",
	"another_realm(`new (class WebAssembly_LinkErrorEx extends WebAssembly.LinkError {})()`)",
	"another_realm(`new (class WebAssembly_RuntimeErrorEx extends WebAssembly.RuntimeError {})()`)",
	"another_realm(`new (class extends Error {})()`)",
	"another_realm(`new (class extends EvalError {})()`)",
	"another_realm(`new (class extends RangeError {})()`)",
	"another_realm(`new (class extends ReferenceError {})()`)",
	"another_realm(`new (class extends SyntaxError {})()`)",
	"another_realm(`new (class extends TypeError {})()`)",
	"another_realm(`new (class extends URIError {})()`)",
	"another_realm(`new (class extends WebAssembly.CompileError {})()`)",
	"another_realm(`new (class extends WebAssembly.LinkError {})()`)",
	"another_realm(`new (class extends WebAssembly.RuntimeError {})()`)",
	"another_realm(`new (class AggregateErrorEx extends AggregateError {})(\"\")`)",
	"another_realm(`new (class extends AggregateError {})(\"\")`)",
	"another_realm(`new (class ArrayBufferEx extends ArrayBuffer {})()`)",
	"another_realm(`new (class extends ArrayBuffer {})()`)",
	"another_realm(`new (class ArrayEx extends Array {})()`)",
	"another_realm(`new (class extends Array {})()`)",
	"another_realm(`new (class BigInt64ArrayEx extends BigInt64Array {})()`)",
	"another_realm(`new (class extends BigInt64Array {})()`)",
	"another_realm(`new (class BigUint64ArrayEx extends BigUint64Array {})()`)",
	"another_realm(`new (class extends BigUint64Array {})()`)",
	"another_realm(`new (class BlobEx extends Blob {})()`)",
	"another_realm(`new (class extends Blob {})()`)",
	"another_realm(`new (class BooleanEx extends Boolean {})()`)",
	"another_realm(`new (class extends Boolean {})()`)",
	"another_realm(`new (class DataViewEx extends DataView {})(new ArrayBuffer())`)",
	"another_realm(`new (class extends DataView {})(new ArrayBuffer())`)",
	"another_realm(`new (class DateEx extends Date {})()`)",
	"another_realm(`new (class extends Date {})()`)",
	"another_realm(`new (class FileEx extends File {})([\"\"],\"\")`)",
	"another_realm(`new (class extends File {})([\"\"],\"\")`)",
	"another_realm(`new (class FinalizationRegistryEx extends FinalizationRegistry {})(()=>{})`)",
	"another_realm(`new (class extends FinalizationRegistry {})(()=>{})`)",
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
	"another_realm(`new (class Intl_CollatorEx extends Intl.Collator {})()`)",
	"another_realm(`new (class extends Intl.Collator {})()`)",
	"another_realm(`new (class Intl_DateTimeFormatEx extends Intl.DateTimeFormat {})()`)",
	"another_realm(`new (class extends Intl.DateTimeFormat {})()`)",
	"another_realm(`new (class Intl_DisplayNamesEx extends Intl.DisplayNames {})([], {type: \"language\"})`)",
	"another_realm(`new (class extends Intl.DisplayNames {})([], {type: \"language\"})`)",
	"another_realm(`new (class Intl_ListFormatEx extends Intl.ListFormat {})()`)",
	"another_realm(`new (class extends Intl.ListFormat {})()`)",
	"another_realm(`new (class Intl_LocaleEx extends Intl.Locale {})(\"en-US\")`)",
	"another_realm(`new (class extends Intl.Locale {})(\"en-US\")`)",
	"another_realm(`new (class Intl_NumberFormatEx extends Intl.NumberFormat {})()`)",
	"another_realm(`new (class extends Intl.NumberFormat {})()`)",
	"another_realm(`new (class Intl_PluralRulesEx extends Intl.PluralRules {})()`)",
	"another_realm(`new (class extends Intl.PluralRules {})()`)",
	"another_realm(`new (class Intl_RelativeTimeFormatEx extends Intl.RelativeTimeFormat {})()`)",
	"another_realm(`new (class extends Intl.RelativeTimeFormat {})()`)",
	"another_realm(`new (class MapEx extends Map {})()`)",
	"another_realm(`new (class extends Map {})()`)",
	"another_realm(`new (class NumberEx extends Number {})()`)",
	"another_realm(`new (class extends Number {})()`)",
	"another_realm(`new (class ObjectEx extends Object {})()`)",
	"another_realm(`new (class extends Object {})()`)",
	"another_realm(`new class {}`)",
	"another_realm(`new class { fn() {} }`)",
	"another_realm(`new class A {}`)",
	"another_realm(`new class A { fn() {} }`)",
	"another_realm(`new class B extends (class A { fn() {} }) { fn() {} }`)",
	"another_realm(`new (class PromiseEx extends Promise {})(() => {})`)",
	"another_realm(`new (class extends Promise {})(() => {})`)",
	"another_realm(`new (class RegExpEx extends RegExp {})()`)",
	"another_realm(`new (class extends RegExp {})()`)",
	"another_realm(`new (class SetEx extends Set {})()`)",
	"another_realm(`new (class extends Set {})()`)",
	"another_realm(`new (class SharedArrayBufferEx extends SharedArrayBuffer {})()`)",
	"another_realm(`new (class extends SharedArrayBuffer {})()`)",
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
	"another_realm(`new (class WeakMapEx extends WeakMap {})()`)",
	"another_realm(`new (class extends WeakMap {})()`)",
	"another_realm(`new (class WeakRefEx extends WeakRef {})({})`)",
	"another_realm(`new (class extends WeakRef {})({})`)",
	"another_realm(`new (class WeakSetEx extends WeakSet {})()`)",
	"another_realm(`new (class extends WeakSet {})()`)",
	"another_realm(`new WebAssembly.Memory({initial:1, maximum:1})`)",
	"another_realm(`new (class WebAssembly_MemoryEx extends WebAssembly.Memory {})({initial:1, maximum:1})`)",
	"another_realm(`new (class extends WebAssembly.Memory {})({initial:1, maximum:1})`)",
	"another_realm(`new WebAssembly.Table({initial:1, element:\"anyfunc\"})`)",
	"another_realm(`new (class WebAssembly_TableEx extends WebAssembly.Table {})({initial:1, element:\"anyfunc\"})`)",
	"another_realm(`new (class extends WebAssembly.Table {})({initial:1, element:\"anyfunc\"})`)",
	"another_realm(`(() => { const v = new (class WorkerEx extends Worker {})(\"worker_value.js\"); v.terminate(); return v })()`)",
	"another_realm(`(() => { const v = new (class extends Worker {})(\"worker_value.js\"); v.terminate(); return v })()`)",
	"another_realm(`new Array(2)`)",
	"another_realm(`new ArrayBuffer()`)",
	"another_realm(`new ArrayBuffer`)",
	"another_realm(`new BigInt64Array()`)",
	"another_realm(`new BigInt64Array`)",
	"another_realm(`new BigUint64Array()`)",
	"another_realm(`new BigUint64Array`)",
	"another_realm(`new Blob()`)",
	"another_realm(`new Blob`)",
	"another_realm(`new DataView(new ArrayBuffer())`)",
	"another_realm(`new Date()`)",
	"another_realm(`new Date`)",
	"another_realm(`new Date(NaN)`)",
	"another_realm(`new File([\"\"],\"\")`)",
	"another_realm(`new FinalizationRegistry(()=>{})`)",
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
	"another_realm(`new Intl.DisplayNames([], {type: \"language\"})`)",
	"another_realm(`new Intl.ListFormat()`)",
	"another_realm(`new Intl.ListFormat`)",
	"another_realm(`new Intl.Locale(\"en-US\")`)",
	"another_realm(`new Intl.PluralRules()`)",
	"another_realm(`new Intl.PluralRules`)",
	"another_realm(`new Intl.RelativeTimeFormat()`)",
	"another_realm(`new Intl.RelativeTimeFormat`)",
	"another_realm(`new Map()`)",
	"another_realm(`new Map`)",
	"another_realm(`new Map([[1,1]])`)",
	"another_realm(`new Set()`)",
	"another_realm(`new Set`)",
	"another_realm(`new Set([1])`)",
	"another_realm(`new SharedArrayBuffer()`)",
	"another_realm(`new SharedArrayBuffer`)",
	"another_realm(`new Uint16Array()`)",
	"another_realm(`new Uint16Array`)",
	"another_realm(`new Uint32Array()`)",
	"another_realm(`new Uint32Array`)",
	"another_realm(`new Uint8Array()`)",
	"another_realm(`new Uint8Array`)",
	"another_realm(`new Uint8ClampedArray()`)",
	"another_realm(`new Uint8ClampedArray`)",
	"another_realm(`new WeakMap()`)",
	"another_realm(`new WeakMap`)",
	"another_realm(`new WeakRef({})`)",
	"another_realm(`new WeakSet()`)",
	"another_realm(`new WeakSet`)",
	"another_realm(`(() => { const v = new Worker(\"worker_value.js\"); v.terminate(); return v })()`)",
	"another_realm(`window`)",
	"another_realm(`{ *[Symbol.iterator]() { yield 1 } }`)",
	"another_realm(`{ length: 1 }`)",
	"another_realm(`{ a: 1, length: 1 }`)",
	"another_realm(`{ 1: 1, length: 1 }`)",
	"another_realm(`{ 1: 1, 2: 2, length: 1 }`)",
	"another_realm(`{ [Symbol.iterator]: function*() { yield 0 }, valueOf: () => 0 }`)",
	"another_realm(`{ async* [Symbol.asyncIterator]() { yield 1 } }`)",
	"another_realm(`{a:1}`)",
	"another_realm(`{ toString: function() { return \"str\" } }`)",
	"another_realm(`{ toString: function() { return \"NaN\" } }`)",
	"another_realm(`{ call: function() { return 1 } }`)",
	"another_realm(`{ get [Symbol.toStringTag]() { return \"Array\" } }`)",
	"another_realm(`{ length: 1.1 }`)",
	"another_realm(`{ length: NaN }`)",
	"another_realm(`{ size: 0 }`)",
	"another_realm(`{ then: () => {} }`)",
	"document",
	"document.createElement(\"custom_tag\")",
	"document.createElement(\"div\")",
	"document.createTextNode(\"\")",
	"document.createTextNode(\"str\")",
	"document.forms",
	"document.querySelectorAll(\"div\")",
	"module",
	"new (class AggregateErrorEx extends AggregateError {})(\"\")",
	"new (class extends AggregateError {})(\"\")",
	"new (class ArrayBufferEx extends ArrayBuffer {})()",
	"new (class extends ArrayBuffer {})()",
	"new (class ArrayEx extends Array {})()",
	"new (class extends Array {})()",
	"new (class BigInt64ArrayEx extends BigInt64Array {})()",
	"new (class extends BigInt64Array {})()",
	"new (class BigUint64ArrayEx extends BigUint64Array {})()",
	"new (class extends BigUint64Array {})()",
	"new (class BlobEx extends Blob {})()",
	"new (class extends Blob {})()",
	"new (class BooleanEx extends Boolean {})()",
	"new (class extends Boolean {})()",
	"new (class DataViewEx extends DataView {})(new ArrayBuffer())",
	"new (class extends DataView {})(new ArrayBuffer())",
	"new (class DateEx extends Date {})()",
	"new (class extends Date {})()",
	"new (class ErrorEx extends Error {})()",
	"new (class extends Error {})()",
	"new (class EvalErrorEx extends EvalError {})()",
	"new (class extends EvalError {})()",
	"new (class FileEx extends File {})([\"\"],\"\")",
	"new (class extends File {})([\"\"],\"\")",
	"new (class FinalizationRegistryEx extends FinalizationRegistry {})(()=>{})",
	"new (class extends FinalizationRegistry {})(()=>{})",
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
	"new (class Intl_CollatorEx extends Intl.Collator {})()",
	"new (class extends Intl.Collator {})()",
	"new (class Intl_DateTimeFormatEx extends Intl.DateTimeFormat {})()",
	"new (class extends Intl.DateTimeFormat {})()",
	"new (class Intl_DisplayNamesEx extends Intl.DisplayNames {})([], {type: \"language\"})",
	"new (class extends Intl.DisplayNames {})([], {type: \"language\"})",
	"new (class Intl_ListFormatEx extends Intl.ListFormat {})()",
	"new (class extends Intl.ListFormat {})()",
	"new (class Intl_LocaleEx extends Intl.Locale {})(\"en-US\")",
	"new (class extends Intl.Locale {})(\"en-US\")",
	"new (class Intl_NumberFormatEx extends Intl.NumberFormat {})()",
	"new (class extends Intl.NumberFormat {})()",
	"new (class Intl_PluralRulesEx extends Intl.PluralRules {})()",
	"new (class extends Intl.PluralRules {})()",
	"new (class Intl_RelativeTimeFormatEx extends Intl.RelativeTimeFormat {})()",
	"new (class extends Intl.RelativeTimeFormat {})()",
	"new (class MapEx extends Map {})()",
	"new (class extends Map {})()",
	"new (class NumberEx extends Number {})()",
	"new (class extends Number {})()",
	"new (class ObjectEx extends Object {})()",
	"new (class extends Object {})()",
	"new class {}",
	"new class { fn() {} }",
	"new class A {}",
	"new class A { fn() {} }",
	"new class B extends (class A { fn() {} }) { fn() {} }",
	"new (class PromiseEx extends Promise {})(() => {})",
	"new (class extends Promise {})(() => {})",
	"new (class RangeErrorEx extends RangeError {})()",
	"new (class extends RangeError {})()",
	"new (class ReferenceErrorEx extends ReferenceError {})()",
	"new (class extends ReferenceError {})()",
	"new (class RegExpEx extends RegExp {})()",
	"new (class extends RegExp {})()",
	"new (class SetEx extends Set {})()",
	"new (class extends Set {})()",
	"new (class SharedArrayBufferEx extends SharedArrayBuffer {})()",
	"new (class extends SharedArrayBuffer {})()",
	"new (class StringEx extends String {})()",
	"new (class extends String {})()",
	"new (class SyntaxErrorEx extends SyntaxError {})()",
	"new (class extends SyntaxError {})()",
	"new (class TypeErrorEx extends TypeError {})()",
	"new (class extends TypeError {})()",
	"new (class URIErrorEx extends URIError {})()",
	"new (class extends URIError {})()",
	"new (class Uint16ArrayEx extends Uint16Array {})()",
	"new (class extends Uint16Array {})()",
	"new (class Uint32ArrayEx extends Uint32Array {})()",
	"new (class extends Uint32Array {})()",
	"new (class Uint8ArrayEx extends Uint8Array {})()",
	"new (class extends Uint8Array {})()",
	"new (class Uint8ClampedArrayEx extends Uint8ClampedArray {})()",
	"new (class extends Uint8ClampedArray {})()",
	"new (class WeakMapEx extends WeakMap {})()",
	"new (class extends WeakMap {})()",
	"new (class WeakRefEx extends WeakRef {})({})",
	"new (class extends WeakRef {})({})",
	"new (class WeakSetEx extends WeakSet {})()",
	"new (class extends WeakSet {})()",
	"new (class WebAssembly_CompileErrorEx extends WebAssembly.CompileError {})()",
	"new (class extends WebAssembly.CompileError {})()",
	"new (class WebAssembly_LinkErrorEx extends WebAssembly.LinkError {})()",
	"new (class extends WebAssembly.LinkError {})()",
	"new WebAssembly.Memory({initial:1, maximum:1})",
	"new (class WebAssembly_MemoryEx extends WebAssembly.Memory {})({initial:1, maximum:1})",
	"new (class extends WebAssembly.Memory {})({initial:1, maximum:1})",
	"new (class WebAssembly_RuntimeErrorEx extends WebAssembly.RuntimeError {})()",
	"new (class extends WebAssembly.RuntimeError {})()",
	"new WebAssembly.Table({initial:1, element:\"anyfunc\"})",
	"new (class WebAssembly_TableEx extends WebAssembly.Table {})({initial:1, element:\"anyfunc\"})",
	"new (class extends WebAssembly.Table {})({initial:1, element:\"anyfunc\"})",
	"(() => { const v = new (class WorkerEx extends Worker {})(\"worker_value.js\"); v.terminate(); return v })()",
	"(() => { const v = new (class extends Worker {})(\"worker_value.js\"); v.terminate(); return v })()",
	"new AggregateError(\"\")",
	"new Array(2)",
	"new ArrayBuffer()",
	"new ArrayBuffer",
	"new BigInt64Array()",
	"new BigInt64Array",
	"new BigUint64Array()",
	"new BigUint64Array",
	"new Blob()",
	"new Blob",
	"new DataView(new ArrayBuffer())",
	"new Date()",
	"new Date",
	"new Date(NaN)",
	"new File([\"\"],\"\")",
	"new FinalizationRegistry(()=>{})",
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
	"new Intl.DisplayNames([], {type: \"language\"})",
	"new Intl.ListFormat()",
	"new Intl.ListFormat",
	"new Intl.Locale(\"en-US\")",
	"new Intl.PluralRules()",
	"new Intl.PluralRules",
	"new Intl.RelativeTimeFormat()",
	"new Intl.RelativeTimeFormat",
	"new Map()",
	"new Map",
	"new Map([[1,1]])",
	"new Set()",
	"new Set",
	"new Set([1])",
	"new SharedArrayBuffer()",
	"new SharedArrayBuffer",
	"new Uint16Array()",
	"new Uint16Array",
	"new Uint32Array()",
	"new Uint32Array",
	"new Uint8Array()",
	"new Uint8Array",
	"new Uint8ClampedArray()",
	"new Uint8ClampedArray",
	"new WeakMap()",
	"new WeakMap",
	"new WeakRef({})",
	"new WeakSet()",
	"new WeakSet",
	"(() => { const v = new Worker(\"worker_value.js\"); v.terminate(); return v })()",
	"window",
	"{ *[Symbol.iterator]() { yield 1 } }",
	"{ length: 1 }",
	"{ a: 1, length: 1 }",
	"{ 1: 1, length: 1 }",
	"{ 1: 1, 2: 2, length: 1 }",
	"{ [Symbol.iterator]: function*() { yield 0 }, valueOf: () => 0 }",
	"{ async* [Symbol.asyncIterator]() { yield 1 } }",
	"{a:1}",
	"{ toString: function() { return \"str\" } }",
	"{ toString: function() { return \"NaN\" } }",
	"{ call: function() { return 1 } }",
	"{ get [Symbol.toStringTag]() { return \"Array\" } }",
	"{ length: 1.1 }",
	"{ length: NaN }",
	"{ size: 0 }",
	"{ then: () => {} }"
]