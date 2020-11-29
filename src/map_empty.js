import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     map_empty
 *     empty_map

 * Code:
 *     v !== null && typeof v === "object" && v.size !== undefined && v.size === 0 && TAG.call(v) === "[object Map]" 
 */
export const is_map_empty = v => v !== null && typeof v === "object" && v.size !== undefined && v.size === 0 && TAG.call(v) === "[object Map]" 
