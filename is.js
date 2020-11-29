import { is_any } from "./src/any.js"
import { is_arguments } from "./src/arguments.js"
import { is_array } from "./src/array.js"
import { is_array_typed } from "./src/array_typed.js"
import { is_array_buffer } from "./src/array_buffer.js"
import { is_array_like } from "./src/array_like.js"
import { is_array_like_object } from "./src/array_like_object.js"
import { is_array_like_object_stiff } from "./src/array_like_object_stiff.js"
import { is_array_like_stiff } from "./src/array_like_stiff.js"
import { is_async_iterable } from "./src/async_iterable.js"
import { is_boxed_bigint } from "./src/boxed_bigint.js"
import { is_boxed_boolean } from "./src/boxed_boolean.js"
import { is_boxed_infinite } from "./src/boxed_infinite.js"
import { is_boxed_nan } from "./src/boxed_nan.js"
import { is_boxed_number } from "./src/boxed_number.js"
import { is_boxed_primitive_excluding_nil } from "./src/boxed_primitive_excluding_nil.js"
import { is_boxed_string } from "./src/boxed_string.js"
import { is_class } from "./src/class.js"
import { is_date } from "./src/date.js"
import { is_date_valid } from "./src/date_valid.js"
import { is_empty_array } from "./src/empty_array.js"
import { is_error } from "./src/error.js"
import { is_falsy } from "./src/falsy.js"
import { is_finalization_registry } from "./src/finalization_registry.js"
import { is_finite } from "./src/finite.js"
import { is_function } from "./src/function.js"
import { is_function_arrow } from "./src/function_arrow.js"
import { is_integer } from "./src/integer.js"
import { is_integer_safe } from "./src/integer_safe.js"
import { is_iterable } from "./src/iterable.js"
import { is_length } from "./src/length.js"
import { is_map } from "./src/map.js"
import { is_map_empty } from "./src/map_empty.js"
import { is_map_weak } from "./src/map_weak.js"
import { is_map_or_weakmap } from "./src/map_or_weakmap.js"
import { is_native } from "./src/native.js"
import { is_nil } from "./src/nil.js"
import { is_nothing } from "./src/nothing.js"
import { is_null } from "./src/null.js"
import { is_object } from "./src/object.js"
import { is_object_plain } from "./src/object_plain.js"
import { is_object_or_function } from "./src/object_or_function.js"
import { is_pob_bigint } from "./src/pob_bigint.js"
import { is_pob_boolean } from "./src/pob_boolean.js"
import { is_pob_infinite } from "./src/pob_infinite.js"
import { is_pob_nan } from "./src/pob_nan.js"
import { is_pob_number } from "./src/pob_number.js"
import { is_pob_primitive_excluding_nil } from "./src/pob_primitive_excluding_nil.js"
import { is_pob_string } from "./src/pob_string.js"
import { is_pob_string_blank } from "./src/pob_string_blank.js"
import { is_pob_string_empty } from "./src/pob_string_empty.js"
import { is_pob_string_numeric } from "./src/pob_string_numeric.js"
import { is_pob_symbol } from "./src/pob_symbol.js"
import { is_promise_native } from "./src/promise_native.js"
import { is_promise_like } from "./src/promise_like.js"
import { is_pure_bigint } from "./src/pure_bigint.js"
import { is_pure_boolean } from "./src/pure_boolean.js"
import { is_pure_infinite } from "./src/pure_infinite.js"
import { is_pure_nan } from "./src/pure_nan.js"
import { is_pure_number } from "./src/pure_number.js"
import { is_pure_primitive } from "./src/pure_primitive.js"
import { is_pure_primitive_excluding_nil } from "./src/pure_primitive_excluding_nil.js"
import { is_pure_primitive_excluding_null } from "./src/pure_primitive_excluding_null.js"
import { is_pure_primitive_excluding_undefined } from "./src/pure_primitive_excluding_undefined.js"
import { is_pure_string } from "./src/pure_string.js"
import { is_pure_symbol } from "./src/pure_symbol.js"
import { is_ref_weak } from "./src/ref_weak.js"
import { is_regexp } from "./src/regexp.js"
import { is_set } from "./src/set.js"
import { is_set_empty } from "./src/set_empty.js"
import { is_set_weak } from "./src/set_weak.js"
import { is_set_or_weakset } from "./src/set_or_weakset.js"
import { is_truthy } from "./src/truthy.js"
import { is_undefined } from "./src/undefined.js"
import { is_weak } from "./src/weak.js"
import { is_zero } from "./src/zero.js"
import { is_zero_negative } from "./src/zero_negative.js"
import { is_zero_positive } from "./src/zero_positive.js"

export const is = {}
export default is
export const it_is = is
is.boxed = {}
is.pob = {}
is.pure = {}

/**
 * Code:
 *     true 
 */
is.any = is_any
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Arguments]" 
 */
is.arguments = is_arguments
/**
 * Code:
 *     Array.isArray(v) 
 */
is.array = is_array
/**
 * Synonyms:
 *     array_typed
 *     typed_array

 * Code:
 *     v !== null && typeof v === 'object' && v.length !== undefined && TypedArraysTags[TAG.call(v)] === true 
 */
is.array_typed = is_array_typed
/**
 * Synonyms:
 *     array_typed
 *     typed_array

 * Code:
 *     v !== null && typeof v === 'object' && v.length !== undefined && TypedArraysTags[TAG.call(v)] === true 
 */
is.typed_array = is_array_typed
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object ArrayBuffer]" 
 */
is.array_buffer = is_array_buffer
/**
 * Code:
 *     typeof v === "string" || v !== null && typeof v === "object" && v.length !== undefined 
 *
 * Same as `is.array_like_object()` + strings
 */
is.array_like = is_array_like
/**
 * Code:
 *     v !== null && typeof v === "object" && v.length !== undefined 
 *
 * Strings and functions are not included.
 */
is.array_like_object = is_array_like_object
/**
 * Code:
 *     v !== null && typeof v === "object" && typeof (v=v.length) === "number" && v >= 0 && v <= Number.MAX_SAFE_INTEGER && v % 1 === 0 
 */
is.array_like_object_stiff = is_array_like_object_stiff
/**
 * Code:
 *     typeof v === "string" || v !== null && typeof v === "object" && typeof (v=v.length) === "number" && v >= 0 && v <= Number.MAX_SAFE_INTEGER && v % 1 === 0 
 */
is.array_like_stiff = is_array_like_stiff
/**
 * Synonyms:
 *     async_iterable
 *     iterable_async

 * Code:
 *     v != null && typeof v !== "function" && (typeof v.constructor === "function" && ( v[Symbol.iterator] !== undefined || v[Symbol.asyncIterator] !== undefined )) || ((v = TAG.call(Object.getPrototypeOf(Object.getPrototypeOf(v||{})||{})))) === "[object Generator]" || v === "[object AsyncGenerator]" 
 */
is.async_iterable = is_async_iterable
/**
 * Synonyms:
 *     async_iterable
 *     iterable_async

 * Code:
 *     v != null && typeof v !== "function" && (typeof v.constructor === "function" && ( v[Symbol.iterator] !== undefined || v[Symbol.asyncIterator] !== undefined )) || ((v = TAG.call(Object.getPrototypeOf(Object.getPrototypeOf(v||{})||{})))) === "[object Generator]" || v === "[object AsyncGenerator]" 
 */
is.iterable_async = is_async_iterable
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object BigInt]" 
 */
is.boxed.bigint = is_boxed_bigint
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Boolean]" 
 */
is.boxed.boolean = is_boxed_boolean
/**
 * Code:
 *     v !==null && typeof v ==="object" && ((v=v.valueOf?.()) === Infinity || v === -Infinity) 
 */
is.boxed.infinite = is_boxed_infinite
/**
 * Code:
 *     v !== null && typeof v === "object" && Number.isNaN(v.valueOf?.()) && TAG.call(v) === "[object Number]" 
 */
is.boxed.nan = is_boxed_nan
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Number]" 
 */
is.boxed.number = is_boxed_number
/**
 * Code:
 *     v !== null && typeof v ==="object" && ((v=TAG.call(v)) === "[object Number]" || v === "[object String]" || v === "[object Boolean]" || v === "[object BigInt]" || v === "[object Symbol]") 
 */
is.boxed.primitive_excluding_nil = is_boxed_primitive_excluding_nil
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object String]" 
 */
is.boxed.string = is_boxed_string
/**
 * Synonyms:
 *     class
 *     custom_class

 * Code:
 *     typeof v === "function" && v.toString().startsWith("class ") 
 */
is.class = is_class
/**
 * Synonyms:
 *     class
 *     custom_class

 * Code:
 *     typeof v === "function" && v.toString().startsWith("class ") 
 */
is.custom_class = is_class
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Date]" 
 */
is.date = is_date
/**
 * Synonyms:
 *     date_valid
 *     valid_date

 * Code:
 *     v !== null && typeof v === "object" && Number.isInteger(v.valueOf?.()) && TAG.call(v) === "[object Date]" 
 */
is.date_valid = is_date_valid
/**
 * Synonyms:
 *     date_valid
 *     valid_date

 * Code:
 *     v !== null && typeof v === "object" && Number.isInteger(v.valueOf?.()) && TAG.call(v) === "[object Date]" 
 */
is.valid_date = is_date_valid
/**
 * Synonyms:
 *     empty_array
 *     array_empty

 * Code:
 *     Array.isArray(v) && v.length === 0 
 */
is.empty_array = is_empty_array
/**
 * Synonyms:
 *     empty_array
 *     array_empty

 * Code:
 *     Array.isArray(v) && v.length === 0 
 */
is.array_empty = is_empty_array
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Error]" 
 */
is.error = is_error
/**
 * Code:
 *     !v 
 *
 * Quite useless. Probably will be removed in the future.
 */
is.falsy = is_falsy
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object FinalizationRegistry]" 
 */
is.finalization_registry = is_finalization_registry
/**
 * Code:
 *     typeof v === "number" && isFinite(v) 
 */
is.finite = is_finite
/**
 * Synonyms:
 *     function
 *     fn
 *     func

 * Code:
 *     typeof v === "function" 
 */
is.function = is_function
/**
 * Synonyms:
 *     function
 *     fn
 *     func

 * Code:
 *     typeof v === "function" 
 */
is.fn = is_function
/**
 * Synonyms:
 *     function
 *     fn
 *     func

 * Code:
 *     typeof v === "function" 
 */
is.func = is_function
/**
 * Synonyms:
 *     function_arrow
 *     arrow_function

 * Code:
 *     typeof v === "function" && /^[^{]*=>/.test(v.toString()) 
 */
is.function_arrow = is_function_arrow
/**
 * Synonyms:
 *     function_arrow
 *     arrow_function

 * Code:
 *     typeof v === "function" && /^[^{]*=>/.test(v.toString()) 
 */
is.arrow_function = is_function_arrow
/**
 * Code:
 *     Number.isInteger(v) 
 */
is.integer = is_integer
/**
 * Synonyms:
 *     integer_safe
 *     safe_integer

 * Code:
 *     Number.isSafeInteger(v) 
 */
is.integer_safe = is_integer_safe
/**
 * Synonyms:
 *     integer_safe
 *     safe_integer

 * Code:
 *     Number.isSafeInteger(v) 
 */
is.safe_integer = is_integer_safe
/**
 * Code:
 *     typeof v !== "function" && v != null && typeof v.constructor === "function" && v[Symbol.iterator] !== undefined || TAG.call(Object.getPrototypeOf(Object.getPrototypeOf(v||{})||{})) === "[object Generator]" 
 */
is.iterable = is_iterable
/**
 * Code:
 *     typeof v === "number" && v >= 0 && v <= Number.MAX_SAFE_INTEGER && v % 1 === 0 
 */
is.length = is_length
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Map]" 
 */
is.map = is_map
/**
 * Synonyms:
 *     map_empty
 *     empty_map

 * Code:
 *     v !== null && typeof v === "object" && v.size !== undefined && v.size === 0 && TAG.call(v) === "[object Map]" 
 */
is.map_empty = is_map_empty
/**
 * Synonyms:
 *     map_empty
 *     empty_map

 * Code:
 *     v !== null && typeof v === "object" && v.size !== undefined && v.size === 0 && TAG.call(v) === "[object Map]" 
 */
is.empty_map = is_map_empty
/**
 * Synonyms:
 *     map_weak
 *     weak_map

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object WeakMap]" 
 */
is.map_weak = is_map_weak
/**
 * Synonyms:
 *     map_weak
 *     weak_map

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object WeakMap]" 
 */
is.weak_map = is_map_weak
/**
 * Code:
 *     v !== null && typeof v === "object" && ((v=TAG.call(v)) === "[object Map]" || v === "[object WeakMap]") 
 */
is.map_or_weakmap = is_map_or_weakmap
/**
 * Code:
 *     typeof v === "function" && v.toString().includes("[native code]") && ! v.name.includes("bound ") 
 */
is.native = is_native
/**
 * Synonyms:
 *     nil
 *     null_undefined
 *     undefined_null
 *     nullish

 * Code:
 *     v == null 
 */
is.nil = is_nil
/**
 * Synonyms:
 *     nil
 *     null_undefined
 *     undefined_null
 *     nullish

 * Code:
 *     v == null 
 */
is.null_undefined = is_nil
/**
 * Synonyms:
 *     nil
 *     null_undefined
 *     undefined_null
 *     nullish

 * Code:
 *     v == null 
 */
is.undefined_null = is_nil
/**
 * Synonyms:
 *     nil
 *     null_undefined
 *     undefined_null
 *     nullish

 * Code:
 *     v == null 
 */
is.nullish = is_nil
/**
 * Code:
 *     false 
 */
is.nothing = is_nothing
/**
 * Code:
 *     v === null 
 */
is.null = is_null
/**
 * Code:
 *     v !== null && typeof v === "object" 
 */
is.object = is_object
/**
 * Synonyms:
 *     object_plain
 *     plain_object

 * Code:
 *     v !== null && typeof v === "object" && (Object.getPrototypeOf(v) === null || TAG.call(v) === "[object Object]" && v.constructor instanceof v.constructor && Object.getPrototypeOf(v).hasOwnProperty("constructor")) 
 */
is.object_plain = is_object_plain
/**
 * Synonyms:
 *     object_plain
 *     plain_object

 * Code:
 *     v !== null && typeof v === "object" && (Object.getPrototypeOf(v) === null || TAG.call(v) === "[object Object]" && v.constructor instanceof v.constructor && Object.getPrototypeOf(v).hasOwnProperty("constructor")) 
 */
is.plain_object = is_object_plain
/**
 * Code:
 *     v !== null && (typeof v === "function" || typeof v === "object") 
 */
is.object_or_function = is_object_or_function
/**
 * Code:
 *     typeof v === "bigint" || v !== null && typeof v === "object" && TAG.call(v) === "[object BigInt]" 
 */
is.pob.bigint = is_pob_bigint
/**
 * Code:
 *     typeof v === "boolean" || v !== null && typeof v === "object" && TAG.call(v) === "[object Boolean]" 
 */
is.pob.boolean = is_pob_boolean
/**
 * Code:
 *     typeof v === "number" && (v === -Infinity || v === Infinity) || v !== null && typeof v === "object" && ((v=v.valueOf?.()) === -Infinity || v === Infinity) 
 */
is.pob.infinite = is_pob_infinite
/**
 * Code:
 *     v !== v || v !== null && typeof v === "object" && Number.isNaN(v.valueOf?.()) && TAG.call(v) === "[object Number]" 
 */
is.pob.nan = is_pob_nan
/**
 * Code:
 *     typeof v === "number" || v !== null && typeof v === "object" && TAG.call(v) === "[object Number]" 
 */
is.pob.number = is_pob_number
/**
 * Code:
 *     v !== null && (typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" || typeof v ==="object" && ((v=TAG.call(v)) === "[object Number]" || v === "[object String]" || v === "[object Boolean]" || v === "[object BigInt]" || v === "[object Symbol]")) 
 */
is.pob.primitive_excluding_nil = is_pob_primitive_excluding_nil
/**
 * Code:
 *     typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]" 
 */
is.pob.string = is_pob_string
/**
 * Synonyms:
 *     string_blank
 *     blank_string

 * Code:
 *     (typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]") && (v.length === 0 || /^\s*$/.test(v)) 
 */
is.pob.string_blank = is_pob_string_blank
/**
 * Synonyms:
 *     string_blank
 *     blank_string

 * Code:
 *     (typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]") && (v.length === 0 || /^\s*$/.test(v)) 
 */
is.pob.blank_string = is_pob_string_blank
/**
 * Synonyms:
 *     string_empty
 *     empty_string

 * Code:
 *     typeof v === "string" && v === "" || v !== null && typeof v === "object" && v.length === 0 && TAG.call(v) === "[object String]" 
 */
is.pob.string_empty = is_pob_string_empty
/**
 * Synonyms:
 *     string_empty
 *     empty_string

 * Code:
 *     typeof v === "string" && v === "" || v !== null && typeof v === "object" && v.length === 0 && TAG.call(v) === "[object String]" 
 */
is.pob.empty_string = is_pob_string_empty
/**
 * Synonyms:
 *     string_numeric
 *     numeric_string

 * Code:
 *     (typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]") && ! Number.isNaN(parseFloat(v)) 
 */
is.pob.string_numeric = is_pob_string_numeric
/**
 * Synonyms:
 *     string_numeric
 *     numeric_string

 * Code:
 *     (typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]") && ! Number.isNaN(parseFloat(v)) 
 */
is.pob.numeric_string = is_pob_string_numeric
/**
 * Code:
 *     typeof v === "symbol" || v !== null && typeof v === "object" && TAG.call(v) === "[object Symbol]" 
 */
is.pob.symbol = is_pob_symbol
/**
 * Synonyms:
 *     promise_native
 *     native_promise

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Promise]" 
 */
is.promise_native = is_promise_native
/**
 * Synonyms:
 *     promise_native
 *     native_promise

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Promise]" 
 */
is.native_promise = is_promise_native
/**
 * Code:
 *     v !== null && typeof v === "object" && typeof v.then === "function" 
 */
is.promise_like = is_promise_like
/**
 * Code:
 *     typeof v === "bigint" 
 */
is.bigint = is_pure_bigint
/**
 * Code:
 *     typeof v === "bigint" 
 */
is.pure.bigint = is_pure_bigint
/**
 * Code:
 *     typeof v === "boolean" 
 */
is.boolean = is_pure_boolean
/**
 * Code:
 *     typeof v === "boolean" 
 */
is.pure.boolean = is_pure_boolean
/**
 * Code:
 *     typeof v === "number" && (v === Infinity || v === -Infinity) 
 */
is.infinite = is_pure_infinite
/**
 * Code:
 *     typeof v === "number" && (v === Infinity || v === -Infinity) 
 */
is.pure.infinite = is_pure_infinite
/**
 * Code:
 *     v !== v 
 */
is.nan = is_pure_nan
/**
 * Code:
 *     v !== v 
 */
is.pure.nan = is_pure_nan
/**
 * Code:
 *     typeof v === "number" 
 */
is.number = is_pure_number
/**
 * Code:
 *     typeof v === "number" 
 */
is.pure.number = is_pure_number
/**
 * Code:
 *     v === null || v === undefined || typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 *
 * Includes `null` and `undefined`!
 */
is.primitive = is_pure_primitive
/**
 * Code:
 *     v === null || v === undefined || typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 *
 * Includes `null` and `undefined`!
 */
is.pure.primitive = is_pure_primitive
/**
 * Code:
 *     typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 */
is.primitive_excluding_nil = is_pure_primitive_excluding_nil
/**
 * Code:
 *     typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 */
is.pure.primitive_excluding_nil = is_pure_primitive_excluding_nil
/**
 * Code:
 *     v === undefined || typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 *
 * Includes `undefined`!
 */
is.primitive_excluding_null = is_pure_primitive_excluding_null
/**
 * Code:
 *     v === undefined || typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 *
 * Includes `undefined`!
 */
is.pure.primitive_excluding_null = is_pure_primitive_excluding_null
/**
 * Code:
 *     v === null || typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 *
 * Includes `null`!
 */
is.primitive_excluding_undefined = is_pure_primitive_excluding_undefined
/**
 * Code:
 *     v === null || typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 *
 * Includes `null`!
 */
is.pure.primitive_excluding_undefined = is_pure_primitive_excluding_undefined
/**
 * Code:
 *     typeof v === "string" 
 */
is.string = is_pure_string
/**
 * Code:
 *     typeof v === "string" 
 */
is.pure.string = is_pure_string
/**
 * Code:
 *     typeof v === "symbol" 
 */
is.symbol = is_pure_symbol
/**
 * Code:
 *     typeof v === "symbol" 
 */
is.pure.symbol = is_pure_symbol
/**
 * Synonyms:
 *     ref_weak
 *     weak_ref

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object WeakRef]" 
 */
is.ref_weak = is_ref_weak
/**
 * Synonyms:
 *     ref_weak
 *     weak_ref

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object WeakRef]" 
 */
is.weak_ref = is_ref_weak
/**
 * Synonyms:
 *     regexp
 *     re

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object RegExp]" 
 */
is.regexp = is_regexp
/**
 * Synonyms:
 *     regexp
 *     re

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object RegExp]" 
 */
is.re = is_regexp
/**
 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object Set]" 
 */
is.set = is_set
/**
 * Synonyms:
 *     set_empty
 *     empty_set

 * Code:
 *     v !== null && typeof v === "object" && v.size !== undefined && v.size === 0 && TAG.call(v) === "[object Set]" 
 */
is.set_empty = is_set_empty
/**
 * Synonyms:
 *     set_empty
 *     empty_set

 * Code:
 *     v !== null && typeof v === "object" && v.size !== undefined && v.size === 0 && TAG.call(v) === "[object Set]" 
 */
is.empty_set = is_set_empty
/**
 * Synonyms:
 *     set_weak
 *     weak_set

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object WeakSet]" 
 */
is.set_weak = is_set_weak
/**
 * Synonyms:
 *     set_weak
 *     weak_set

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object WeakSet]" 
 */
is.weak_set = is_set_weak
/**
 * Code:
 *     v !== null && typeof v === "object" && ((v = TAG.call(v)) === "[object Set]" || v === "[object WeakSet]") 
 */
is.set_or_weakset = is_set_or_weakset
/**
 * Code:
 *     !!v 
 *
 * Quite useless. Probably will be removed in the future.
 */
is.truthy = is_truthy
/**
 * Code:
 *     v === undefined 
 */
is.undefined = is_undefined
/**
 * Code:
 *     v !== null && typeof v === "object" && ((v = TAG.call(v)) === "[object WeakMap]" || v === "[object WeakSet]" || v === "[object WeakRef]") 
 *
 * Any of: WeakMap, WeakSet, WeakRef
 */
is.weak = is_weak
/**
 * Code:
 *     v === 0 
 */
is.zero = is_zero
/**
 * Synonyms:
 *     zero_negative
 *     negative_zero

 * Code:
 *     Object.is(v,-0) 
 */
is.zero_negative = is_zero_negative
/**
 * Synonyms:
 *     zero_negative
 *     negative_zero

 * Code:
 *     Object.is(v,-0) 
 */
is.negative_zero = is_zero_negative
/**
 * Synonyms:
 *     zero_positive
 *     positive_zero

 * Code:
 *     Object.is(v,0) 
 */
is.zero_positive = is_zero_positive
/**
 * Synonyms:
 *     zero_positive
 *     positive_zero

 * Code:
 *     Object.is(v,0) 
 */
is.positive_zero = is_zero_positive
