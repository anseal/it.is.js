import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     string_blank
 *     blank_string

 * Code:
 *     (typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]") && (v.length === 0 || /^\s*$/.test(v)) 
 */
export const is_pob_string_blank = v => (typeof v === "string" || v !== null && typeof v === "object" && TAG.call(v) === "[object String]") && (v.length === 0 || /^\s*$/.test(v)) 
