import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     v !== null && typeof v === "object" && v.length !== undefined 
 *
 * Strings and functions are not included.
 */
export const is_array_like_object = v => v !== null && typeof v === "object" && v.length !== undefined 
