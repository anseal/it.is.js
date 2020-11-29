import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     typeof v !== "function" && v != null && typeof v.constructor === "function" && v[Symbol.iterator] !== undefined || TAG.call(Object.getPrototypeOf(Object.getPrototypeOf(v||{})||{})) === "[object Generator]" 
 */
export const is_iterable = v => typeof v !== "function" && v != null && typeof v.constructor === "function" && v[Symbol.iterator] !== undefined || TAG.call(Object.getPrototypeOf(Object.getPrototypeOf(v||{})||{})) === "[object Generator]" 
