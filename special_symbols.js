
export const hidden_symbols = {} // needed for make_live_value() in tests

export const	GeneratorFunction      =                             Object.getPrototypeOf(function*(){}).constructor
hidden_symbols.	GeneratorFunction      = [ GeneratorFunction      , "Object.getPrototypeOf(function*(){}).constructor" ]

export const	Generator              =                             Object.getPrototypeOf(function*(){}())
hidden_symbols.	Generator              = [ Generator              , "Object.getPrototypeOf(function*(){}())" ]

export const	AsyncFunction          =                             Object.getPrototypeOf(async function(){}).constructor
hidden_symbols.	AsyncFunction          = [ AsyncFunction          , "Object.getPrototypeOf(async function(){}).constructor" ]

export const	AsyncGeneratorFunction =                            Object.getPrototypeOf(async function*() {}).constructor
hidden_symbols.	AsyncGeneratorFunction = [ AsyncGeneratorFunction, "Object.getPrototypeOf(async function*() {}).constructor" ]

export const	AsyncGenerator         =                            Object.getPrototypeOf(async function*() {}())
hidden_symbols.	AsyncGenerator         = [ AsyncGenerator        , "Object.getPrototypeOf(async function*() {}())" ]

export const TAG = Object.prototype.toString

export function base_TAG(v) {
	let proto1 = Object.getPrototypeOf(v)
	if( proto1 === null ) return "[object Object]"
		// this `if` works only for `v === Object.create(null)`
		// constant is faster than `Object.prototype.toString.call(v)`
		// and required for `v === Object.create(null); v[Symbol.toStringTag] = "something"`
	let proto2 = Object.getPrototypeOf(proto1)
	if( proto2 === null ) return TAG.call(proto1)
	let proto3 = null
	while(true) {
		proto3 = Object.getPrototypeOf(proto2)
		if( proto3 === null ) return TAG.call(proto1)
		proto1 = proto2
		proto2 = proto3
	} 
}

// Returns "[object Object]" for cases like `Object.create(...Object.create(new Number())...)`. Not sure if it is useful
export function pure_TAG(v) {
	let proto1 = Object.getPrototypeOf(v)
	if( proto1 === null ) return "[object Object]"
	let proto2 = Object.getPrototypeOf(proto1)
	if( proto2 === null ) return TAG.call(proto1)
	let proto3 = null
	let proto_chain_length = 3
	while(true) {
		proto3 = Object.getPrototypeOf(proto2)
		if( proto3 === null ) {
			if( proto_chain_length >= 4 ) return "[object Object]" // TODO: get rid off while()
			return TAG.call(proto1)
		}
		proto1 = proto2
		proto2 = proto3
		++proto_chain_length
	} 
}

export function infinite(v) {
	if( typeof v === "number" )
		return (v === -Infinity || v === Infinity)
	return v !== null && typeof v === "object" && ((v=v.valueOf?.()) === -Infinity    ||    v === Infinity)
}

export function no_own_props(v) {
	for(const key in v) if( v.hasOwnProperty(key) ) return false
	return true
}

export function no_props(v) {
	for(const key in v) return false
	return true
}

export function reflect_constructable(v) {
	try {
		Reflect.construct(String, [], v)
		return true
	} catch (e) {
		return false
	}
}

export function proxy_constructable(v) {
	try {
		new (new Proxy(v, { construct() { return {} } }))
		return true
	} catch(e) {
		return false
	}
}

export const TypedArraysTags  =	{
									'[object Float32Array]'      : true,
									'[object Float64Array]'      : true,
									'[object Int8Array]'         : true,
									'[object Uint8Array]'        : true,
									'[object Uint8ClampedArray]' : true,
									'[object Int16Array]'        : true,
									'[object Uint16Array]'       : true,
									'[object Int32Array]'        : true,
									'[object Uint32Array]'       : true,
									'[object Float32Array]'      : true,
									'[object Float64Array]'      : true,
									'[object BigInt64Array]'     : true,
									'[object BigUint64Array]'    : true,
								}

export const PrimitivesTags   =	{
									"[object Number]"  : true,
									"[object String]"  : true,
									"[object Boolean]" : true,
									"[object BigInt]"  : true,
									"[object Symbol]"  : true,
								}

export const PrimitivesTypeOf =	{ // quite useless - slower than `typeof || typeof || ...`
									"undefined" : true,
									"number"    : true,
									"boolean"   : true,
									"string"    : true,
									"symbol"    : true,
									"bigint"    : true,
								}

// TODO: looks like `Set().has()` slower than other options
export const TypedArraysTagsSet  = new Set(Object.keys(TypedArraysTags))
export const PrimitivesTagsSet   = new Set(Object.keys(PrimitivesTags))
export const PrimitivesTypeOfSet = new Set(Object.keys(PrimitivesTypeOf))
