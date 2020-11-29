import { AsyncFunction,AsyncGenerator,AsyncGeneratorFunction,Generator,GeneratorFunction,PrimitivesTags,PrimitivesTagsSet,PrimitivesTypeOf,PrimitivesTypeOfSet,TAG,TypedArraysTags,TypedArraysTagsSet,base_TAG,hidden_symbols,infinite,no_own_props,no_props,proxy_constructable,pure_TAG,reflect_constructable } from "../special_symbols.js"
/**
 * Synonyms:
 *     object_plain
 *     plain_object

 * Code:
 *     v !== null && typeof v === "object" && (Object.getPrototypeOf(v) === null || TAG.call(v) === "[object Object]" && v.constructor instanceof v.constructor && Object.getPrototypeOf(v).hasOwnProperty("constructor")) 
 */
export const is_object_plain = v => v !== null && typeof v === "object" && (Object.getPrototypeOf(v) === null || TAG.call(v) === "[object Object]" && v.constructor instanceof v.constructor && Object.getPrototypeOf(v).hasOwnProperty("constructor")) 
