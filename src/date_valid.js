import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     date_valid
 *     valid_date

 * Code:
 *     v !== null && typeof v === "object" && Number.isInteger(v.valueOf?.()) && TAG.call(v) === "[object Date]" 
 */
export const is_date_valid = v => v !== null && typeof v === "object" && Number.isInteger(v.valueOf?.()) && TAG.call(v) === "[object Date]" 
