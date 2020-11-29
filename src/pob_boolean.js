import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     typeof v === "boolean" || v !== null && typeof v === "object" && TAG.call(v) === "[object Boolean]" 
 */
export const is_pob_boolean = v => typeof v === "boolean" || v !== null && typeof v === "object" && TAG.call(v) === "[object Boolean]" 
