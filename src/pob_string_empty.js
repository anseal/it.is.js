import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     string_empty
 *     empty_string

 * Code:
 *     typeof v === "string" && v === "" || v !== null && typeof v === "object" && v.length === 0 && TAG.call(v) === "[object String]" 
 */
export const is_pob_string_empty = v => typeof v === "string" && v === "" || v !== null && typeof v === "object" && v.length === 0 && TAG.call(v) === "[object String]" 
