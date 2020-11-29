import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Code:
 *     v === null || v === undefined || typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
 *
 * Includes `null` and `undefined`!
 */
export const is_pure_primitive = v => v === null || v === undefined || typeof v === "number" || typeof v === "boolean" || typeof v === "string" || typeof v === "symbol" || typeof v === "bigint" 
