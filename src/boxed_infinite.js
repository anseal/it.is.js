import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     v !==null && typeof v ==="object" && ((v=v.valueOf?.()) === Infinity || v === -Infinity) 
 */
export const is_boxed_infinite = v => v !==null && typeof v ==="object" && ((v=v.valueOf?.()) === Infinity || v === -Infinity) 
