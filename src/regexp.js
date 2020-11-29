import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     regexp
 *     re

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object RegExp]" 
 */
export const is_regexp = v => v !== null && typeof v === "object" && TAG.call(v) === "[object RegExp]" 
