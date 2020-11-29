import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     set_empty
 *     empty_set

 * Code:
 *     v !== null && typeof v === "object" && v.size !== undefined && v.size === 0 && TAG.call(v) === "[object Set]" 
 */
export const is_set_empty = v => v !== null && typeof v === "object" && v.size !== undefined && v.size === 0 && TAG.call(v) === "[object Set]" 
