import { test } from "./test.js"
import { is_any } from "./src/any.js"
import { any_values, any_disabled_values } from "./value_classes/any.js"
test("any", is_any, any_values, any_disabled_values)

import { is_arguments } from "./src/arguments.js"
import { arguments_values, arguments_disabled_values } from "./value_classes/arguments.js"
test("arguments", is_arguments, arguments_values, arguments_disabled_values)

import { is_array } from "./src/array.js"
import { array_values, array_disabled_values } from "./value_classes/array.js"
test("array", is_array, array_values, array_disabled_values)

import { is_array_typed } from "./src/array_typed.js"
import { array_typed_values, array_typed_disabled_values } from "./value_classes/array_typed.js"
test("array_typed", is_array_typed, array_typed_values, array_typed_disabled_values)

import { is_array_buffer } from "./src/array_buffer.js"
import { array_buffer_values, array_buffer_disabled_values } from "./value_classes/array_buffer.js"
test("array_buffer", is_array_buffer, array_buffer_values, array_buffer_disabled_values)

import { is_array_like } from "./src/array_like.js"
import { array_like_values, array_like_disabled_values } from "./value_classes/array_like.js"
test("array_like", is_array_like, array_like_values, array_like_disabled_values)

import { is_array_like_object } from "./src/array_like_object.js"
import { array_like_object_values, array_like_object_disabled_values } from "./value_classes/array_like_object.js"
test("array_like_object", is_array_like_object, array_like_object_values, array_like_object_disabled_values)

import { is_array_like_object_stiff } from "./src/array_like_object_stiff.js"
import { array_like_object_stiff_values, array_like_object_stiff_disabled_values } from "./value_classes/array_like_object_stiff.js"
test("array_like_object_stiff", is_array_like_object_stiff, array_like_object_stiff_values, array_like_object_stiff_disabled_values)

import { is_array_like_stiff } from "./src/array_like_stiff.js"
import { array_like_stiff_values, array_like_stiff_disabled_values } from "./value_classes/array_like_stiff.js"
test("array_like_stiff", is_array_like_stiff, array_like_stiff_values, array_like_stiff_disabled_values)

import { is_async_iterable } from "./src/async_iterable.js"
import { async_iterable_values, async_iterable_disabled_values } from "./value_classes/async_iterable.js"
test("async_iterable", is_async_iterable, async_iterable_values, async_iterable_disabled_values)

import { is_boxed_bigint } from "./src/boxed_bigint.js"
import { boxed_bigint_values, boxed_bigint_disabled_values } from "./value_classes/boxed_bigint.js"
test("boxed_bigint", is_boxed_bigint, boxed_bigint_values, boxed_bigint_disabled_values)

import { is_boxed_boolean } from "./src/boxed_boolean.js"
import { boxed_boolean_values, boxed_boolean_disabled_values } from "./value_classes/boxed_boolean.js"
test("boxed_boolean", is_boxed_boolean, boxed_boolean_values, boxed_boolean_disabled_values)

import { is_boxed_infinite } from "./src/boxed_infinite.js"
import { boxed_infinite_values, boxed_infinite_disabled_values } from "./value_classes/boxed_infinite.js"
test("boxed_infinite", is_boxed_infinite, boxed_infinite_values, boxed_infinite_disabled_values)

import { is_boxed_nan } from "./src/boxed_nan.js"
import { boxed_nan_values, boxed_nan_disabled_values } from "./value_classes/boxed_nan.js"
test("boxed_nan", is_boxed_nan, boxed_nan_values, boxed_nan_disabled_values)

import { is_boxed_number } from "./src/boxed_number.js"
import { boxed_number_values, boxed_number_disabled_values } from "./value_classes/boxed_number.js"
test("boxed_number", is_boxed_number, boxed_number_values, boxed_number_disabled_values)

import { is_boxed_primitive_excluding_nil } from "./src/boxed_primitive_excluding_nil.js"
import { boxed_primitive_excluding_nil_values, boxed_primitive_excluding_nil_disabled_values } from "./value_classes/boxed_primitive_excluding_nil.js"
test("boxed_primitive_excluding_nil", is_boxed_primitive_excluding_nil, boxed_primitive_excluding_nil_values, boxed_primitive_excluding_nil_disabled_values)

import { is_boxed_string } from "./src/boxed_string.js"
import { boxed_string_values, boxed_string_disabled_values } from "./value_classes/boxed_string.js"
test("boxed_string", is_boxed_string, boxed_string_values, boxed_string_disabled_values)

import { is_class } from "./src/class.js"
import { class_values, class_disabled_values } from "./value_classes/class.js"
test("class", is_class, class_values, class_disabled_values)

import { is_date } from "./src/date.js"
import { date_values, date_disabled_values } from "./value_classes/date.js"
test("date", is_date, date_values, date_disabled_values)

import { is_date_valid } from "./src/date_valid.js"
import { date_valid_values, date_valid_disabled_values } from "./value_classes/date_valid.js"
test("date_valid", is_date_valid, date_valid_values, date_valid_disabled_values)

import { is_empty_array } from "./src/empty_array.js"
import { empty_array_values, empty_array_disabled_values } from "./value_classes/empty_array.js"
test("empty_array", is_empty_array, empty_array_values, empty_array_disabled_values)

import { is_error } from "./src/error.js"
import { error_values, error_disabled_values } from "./value_classes/error.js"
test("error", is_error, error_values, error_disabled_values)

import { is_falsy } from "./src/falsy.js"
import { falsy_values, falsy_disabled_values } from "./value_classes/falsy.js"
test("falsy", is_falsy, falsy_values, falsy_disabled_values)

import { is_finalization_registry } from "./src/finalization_registry.js"
import { finalization_registry_values, finalization_registry_disabled_values } from "./value_classes/finalization_registry.js"
test("finalization_registry", is_finalization_registry, finalization_registry_values, finalization_registry_disabled_values)

import { is_finite } from "./src/finite.js"
import { finite_values, finite_disabled_values } from "./value_classes/finite.js"
test("finite", is_finite, finite_values, finite_disabled_values)

import { is_function } from "./src/function.js"
import { function_values, function_disabled_values } from "./value_classes/function.js"
test("function", is_function, function_values, function_disabled_values)

import { is_function_arrow } from "./src/function_arrow.js"
import { function_arrow_values, function_arrow_disabled_values } from "./value_classes/function_arrow.js"
test("function_arrow", is_function_arrow, function_arrow_values, function_arrow_disabled_values)

import { is_integer } from "./src/integer.js"
import { integer_values, integer_disabled_values } from "./value_classes/integer.js"
test("integer", is_integer, integer_values, integer_disabled_values)

import { is_integer_safe } from "./src/integer_safe.js"
import { integer_safe_values, integer_safe_disabled_values } from "./value_classes/integer_safe.js"
test("integer_safe", is_integer_safe, integer_safe_values, integer_safe_disabled_values)

import { is_iterable } from "./src/iterable.js"
import { iterable_values, iterable_disabled_values } from "./value_classes/iterable.js"
test("iterable", is_iterable, iterable_values, iterable_disabled_values)

import { is_length } from "./src/length.js"
import { length_values, length_disabled_values } from "./value_classes/length.js"
test("length", is_length, length_values, length_disabled_values)

import { is_map } from "./src/map.js"
import { map_values, map_disabled_values } from "./value_classes/map.js"
test("map", is_map, map_values, map_disabled_values)

import { is_map_empty } from "./src/map_empty.js"
import { map_empty_values, map_empty_disabled_values } from "./value_classes/map_empty.js"
test("map_empty", is_map_empty, map_empty_values, map_empty_disabled_values)

import { is_map_weak } from "./src/map_weak.js"
import { map_weak_values, map_weak_disabled_values } from "./value_classes/map_weak.js"
test("map_weak", is_map_weak, map_weak_values, map_weak_disabled_values)

import { is_map_or_weakmap } from "./src/map_or_weakmap.js"
import { map_or_weakmap_values, map_or_weakmap_disabled_values } from "./value_classes/map_or_weakmap.js"
test("map_or_weakmap", is_map_or_weakmap, map_or_weakmap_values, map_or_weakmap_disabled_values)

import { is_native } from "./src/native.js"
import { native_values, native_disabled_values } from "./value_classes/native.js"
test("native", is_native, native_values, native_disabled_values)

import { is_nil } from "./src/nil.js"
import { nil_values, nil_disabled_values } from "./value_classes/nil.js"
test("nil", is_nil, nil_values, nil_disabled_values)

import { is_nothing } from "./src/nothing.js"
import { nothing_values, nothing_disabled_values } from "./value_classes/nothing.js"
test("nothing", is_nothing, nothing_values, nothing_disabled_values)

import { is_null } from "./src/null.js"
import { null_values, null_disabled_values } from "./value_classes/null.js"
test("null", is_null, null_values, null_disabled_values)

import { is_object } from "./src/object.js"
import { object_values, object_disabled_values } from "./value_classes/object.js"
test("object", is_object, object_values, object_disabled_values)

import { is_object_plain } from "./src/object_plain.js"
import { object_plain_values, object_plain_disabled_values } from "./value_classes/object_plain.js"
test("object_plain", is_object_plain, object_plain_values, object_plain_disabled_values)

import { is_object_or_function } from "./src/object_or_function.js"
import { object_or_function_values, object_or_function_disabled_values } from "./value_classes/object_or_function.js"
test("object_or_function", is_object_or_function, object_or_function_values, object_or_function_disabled_values)

import { is_pob_bigint } from "./src/pob_bigint.js"
import { pob_bigint_values, pob_bigint_disabled_values } from "./value_classes/pob_bigint.js"
test("pob_bigint", is_pob_bigint, pob_bigint_values, pob_bigint_disabled_values)

import { is_pob_boolean } from "./src/pob_boolean.js"
import { pob_boolean_values, pob_boolean_disabled_values } from "./value_classes/pob_boolean.js"
test("pob_boolean", is_pob_boolean, pob_boolean_values, pob_boolean_disabled_values)

import { is_pob_infinite } from "./src/pob_infinite.js"
import { pob_infinite_values, pob_infinite_disabled_values } from "./value_classes/pob_infinite.js"
test("pob_infinite", is_pob_infinite, pob_infinite_values, pob_infinite_disabled_values)

import { is_pob_nan } from "./src/pob_nan.js"
import { pob_nan_values, pob_nan_disabled_values } from "./value_classes/pob_nan.js"
test("pob_nan", is_pob_nan, pob_nan_values, pob_nan_disabled_values)

import { is_pob_number } from "./src/pob_number.js"
import { pob_number_values, pob_number_disabled_values } from "./value_classes/pob_number.js"
test("pob_number", is_pob_number, pob_number_values, pob_number_disabled_values)

import { is_pob_primitive_excluding_nil } from "./src/pob_primitive_excluding_nil.js"
import { pob_primitive_excluding_nil_values, pob_primitive_excluding_nil_disabled_values } from "./value_classes/pob_primitive_excluding_nil.js"
test("pob_primitive_excluding_nil", is_pob_primitive_excluding_nil, pob_primitive_excluding_nil_values, pob_primitive_excluding_nil_disabled_values)

import { is_pob_string } from "./src/pob_string.js"
import { pob_string_values, pob_string_disabled_values } from "./value_classes/pob_string.js"
test("pob_string", is_pob_string, pob_string_values, pob_string_disabled_values)

import { is_pob_string_blank } from "./src/pob_string_blank.js"
import { pob_string_blank_values, pob_string_blank_disabled_values } from "./value_classes/pob_string_blank.js"
test("pob_string_blank", is_pob_string_blank, pob_string_blank_values, pob_string_blank_disabled_values)

import { is_pob_string_empty } from "./src/pob_string_empty.js"
import { pob_string_empty_values, pob_string_empty_disabled_values } from "./value_classes/pob_string_empty.js"
test("pob_string_empty", is_pob_string_empty, pob_string_empty_values, pob_string_empty_disabled_values)

import { is_pob_string_numeric } from "./src/pob_string_numeric.js"
import { pob_string_numeric_values, pob_string_numeric_disabled_values } from "./value_classes/pob_string_numeric.js"
test("pob_string_numeric", is_pob_string_numeric, pob_string_numeric_values, pob_string_numeric_disabled_values)

import { is_pob_symbol } from "./src/pob_symbol.js"
import { pob_symbol_values, pob_symbol_disabled_values } from "./value_classes/pob_symbol.js"
test("pob_symbol", is_pob_symbol, pob_symbol_values, pob_symbol_disabled_values)

import { is_promise_native } from "./src/promise_native.js"
import { promise_native_values, promise_native_disabled_values } from "./value_classes/promise_native.js"
test("promise_native", is_promise_native, promise_native_values, promise_native_disabled_values)

import { is_promise_like } from "./src/promise_like.js"
import { promise_like_values, promise_like_disabled_values } from "./value_classes/promise_like.js"
test("promise_like", is_promise_like, promise_like_values, promise_like_disabled_values)

import { is_pure_bigint } from "./src/pure_bigint.js"
import { pure_bigint_values, pure_bigint_disabled_values } from "./value_classes/pure_bigint.js"
test("pure_bigint", is_pure_bigint, pure_bigint_values, pure_bigint_disabled_values)

import { is_pure_boolean } from "./src/pure_boolean.js"
import { pure_boolean_values, pure_boolean_disabled_values } from "./value_classes/pure_boolean.js"
test("pure_boolean", is_pure_boolean, pure_boolean_values, pure_boolean_disabled_values)

import { is_pure_infinite } from "./src/pure_infinite.js"
import { pure_infinite_values, pure_infinite_disabled_values } from "./value_classes/pure_infinite.js"
test("pure_infinite", is_pure_infinite, pure_infinite_values, pure_infinite_disabled_values)

import { is_pure_nan } from "./src/pure_nan.js"
import { pure_nan_values, pure_nan_disabled_values } from "./value_classes/pure_nan.js"
test("pure_nan", is_pure_nan, pure_nan_values, pure_nan_disabled_values)

import { is_pure_number } from "./src/pure_number.js"
import { pure_number_values, pure_number_disabled_values } from "./value_classes/pure_number.js"
test("pure_number", is_pure_number, pure_number_values, pure_number_disabled_values)

import { is_pure_primitive } from "./src/pure_primitive.js"
import { pure_primitive_values, pure_primitive_disabled_values } from "./value_classes/pure_primitive.js"
test("pure_primitive", is_pure_primitive, pure_primitive_values, pure_primitive_disabled_values)

import { is_pure_primitive_excluding_nil } from "./src/pure_primitive_excluding_nil.js"
import { pure_primitive_excluding_nil_values, pure_primitive_excluding_nil_disabled_values } from "./value_classes/pure_primitive_excluding_nil.js"
test("pure_primitive_excluding_nil", is_pure_primitive_excluding_nil, pure_primitive_excluding_nil_values, pure_primitive_excluding_nil_disabled_values)

import { is_pure_primitive_excluding_null } from "./src/pure_primitive_excluding_null.js"
import { pure_primitive_excluding_null_values, pure_primitive_excluding_null_disabled_values } from "./value_classes/pure_primitive_excluding_null.js"
test("pure_primitive_excluding_null", is_pure_primitive_excluding_null, pure_primitive_excluding_null_values, pure_primitive_excluding_null_disabled_values)

import { is_pure_primitive_excluding_undefined } from "./src/pure_primitive_excluding_undefined.js"
import { pure_primitive_excluding_undefined_values, pure_primitive_excluding_undefined_disabled_values } from "./value_classes/pure_primitive_excluding_undefined.js"
test("pure_primitive_excluding_undefined", is_pure_primitive_excluding_undefined, pure_primitive_excluding_undefined_values, pure_primitive_excluding_undefined_disabled_values)

import { is_pure_string } from "./src/pure_string.js"
import { pure_string_values, pure_string_disabled_values } from "./value_classes/pure_string.js"
test("pure_string", is_pure_string, pure_string_values, pure_string_disabled_values)

import { is_pure_symbol } from "./src/pure_symbol.js"
import { pure_symbol_values, pure_symbol_disabled_values } from "./value_classes/pure_symbol.js"
test("pure_symbol", is_pure_symbol, pure_symbol_values, pure_symbol_disabled_values)

import { is_ref_weak } from "./src/ref_weak.js"
import { ref_weak_values, ref_weak_disabled_values } from "./value_classes/ref_weak.js"
test("ref_weak", is_ref_weak, ref_weak_values, ref_weak_disabled_values)

import { is_regexp } from "./src/regexp.js"
import { regexp_values, regexp_disabled_values } from "./value_classes/regexp.js"
test("regexp", is_regexp, regexp_values, regexp_disabled_values)

import { is_set } from "./src/set.js"
import { set_values, set_disabled_values } from "./value_classes/set.js"
test("set", is_set, set_values, set_disabled_values)

import { is_set_empty } from "./src/set_empty.js"
import { set_empty_values, set_empty_disabled_values } from "./value_classes/set_empty.js"
test("set_empty", is_set_empty, set_empty_values, set_empty_disabled_values)

import { is_set_weak } from "./src/set_weak.js"
import { set_weak_values, set_weak_disabled_values } from "./value_classes/set_weak.js"
test("set_weak", is_set_weak, set_weak_values, set_weak_disabled_values)

import { is_set_or_weakset } from "./src/set_or_weakset.js"
import { set_or_weakset_values, set_or_weakset_disabled_values } from "./value_classes/set_or_weakset.js"
test("set_or_weakset", is_set_or_weakset, set_or_weakset_values, set_or_weakset_disabled_values)

import { is_truthy } from "./src/truthy.js"
import { truthy_values, truthy_disabled_values } from "./value_classes/truthy.js"
test("truthy", is_truthy, truthy_values, truthy_disabled_values)

import { is_undefined } from "./src/undefined.js"
import { undefined_values, undefined_disabled_values } from "./value_classes/undefined.js"
test("undefined", is_undefined, undefined_values, undefined_disabled_values)

import { is_weak } from "./src/weak.js"
import { weak_values, weak_disabled_values } from "./value_classes/weak.js"
test("weak", is_weak, weak_values, weak_disabled_values)

import { is_zero } from "./src/zero.js"
import { zero_values, zero_disabled_values } from "./value_classes/zero.js"
test("zero", is_zero, zero_values, zero_disabled_values)

import { is_zero_negative } from "./src/zero_negative.js"
import { zero_negative_values, zero_negative_disabled_values } from "./value_classes/zero_negative.js"
test("zero_negative", is_zero_negative, zero_negative_values, zero_negative_disabled_values)

import { is_zero_positive } from "./src/zero_positive.js"
import { zero_positive_values, zero_positive_disabled_values } from "./value_classes/zero_positive.js"
test("zero_positive", is_zero_positive, zero_positive_values, zero_positive_disabled_values)

