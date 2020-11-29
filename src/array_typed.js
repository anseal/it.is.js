import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     array_typed
 *     typed_array

 * Code:
 *     v !== null && typeof v === 'object' && v.length !== undefined && TypedArraysTags[TAG.call(v)] === true 
 */
export const is_array_typed = v => v !== null && typeof v === 'object' && v.length !== undefined && TypedArraysTags[TAG.call(v)] === true 
