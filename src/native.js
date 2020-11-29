import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     typeof v === "function" && v.toString().includes("[native code]") && ! v.name.includes("bound ") 
 */
export const is_native = v => typeof v === "function" && v.toString().includes("[native code]") && ! v.name.includes("bound ") 
