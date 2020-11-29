import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     set_weak
 *     weak_set

 * Code:
 *     v !== null && typeof v === "object" && TAG.call(v) === "[object WeakSet]" 
 */
export const is_set_weak = v => v !== null && typeof v === "object" && TAG.call(v) === "[object WeakSet]" 
