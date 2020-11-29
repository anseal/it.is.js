import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     async_iterable
 *     iterable_async

 * Code:
 *     v != null && typeof v !== "function" && (typeof v.constructor === "function" && ( v[Symbol.iterator] !== undefined || v[Symbol.asyncIterator] !== undefined )) || ((v = TAG.call(Object.getPrototypeOf(Object.getPrototypeOf(v||{})||{})))) === "[object Generator]" || v === "[object AsyncGenerator]" 
 */
export const is_async_iterable = v => v != null && typeof v !== "function" && (typeof v.constructor === "function" && ( v[Symbol.iterator] !== undefined || v[Symbol.asyncIterator] !== undefined )) || ((v = TAG.call(Object.getPrototypeOf(Object.getPrototypeOf(v||{})||{})))) === "[object Generator]" || v === "[object AsyncGenerator]" 
