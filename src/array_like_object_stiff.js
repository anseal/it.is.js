import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     v !== null && typeof v === "object" && typeof (v=v.length) === "number" && v >= 0 && v <= Number.MAX_SAFE_INTEGER && v % 1 === 0 
 */
export const is_array_like_object_stiff = v => v !== null && typeof v === "object" && typeof (v=v.length) === "number" && v >= 0 && v <= Number.MAX_SAFE_INTEGER && v % 1 === 0 
