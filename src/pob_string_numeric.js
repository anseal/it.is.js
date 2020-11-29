import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     string_numeric
 *     numeric_string

 * Code:
 *     (typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]") && ! Number.isNaN(parseFloat(v)) 
 */
export const is_pob_string_numeric = v => (typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]") && ! Number.isNaN(parseFloat(v)) 
