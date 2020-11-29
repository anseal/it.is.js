import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     function_arrow
 *     arrow_function

 * Code:
 *     typeof v === "function" && /^[^{]*=>/.test(v.toString()) 
 */
export const is_function_arrow = v => typeof v === "function" && /^[^{]*=>/.test(v.toString()) 
