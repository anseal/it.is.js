import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     v !== null && typeof v === "object" && Number.isNaN(v.valueOf?.()) && TAG.call(v) === "[object Number]" 
 */
export const is_boxed_nan = v => v !== null && typeof v === "object" && Number.isNaN(v.valueOf?.()) && TAG.call(v) === "[object Number]" 
