import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     typeof v === "number" && (v === -Infinity || v === Infinity) || v !== null && typeof v === "object" && ((v=v.valueOf?.()) === -Infinity || v === Infinity) 
 */
export const is_pob_infinite = v => typeof v === "number" && (v === -Infinity || v === Infinity) || v !== null && typeof v === "object" && ((v=v.valueOf?.()) === -Infinity || v === Infinity) 
