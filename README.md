# it.is.js

This library solve only one problem - it checks if values are of the kind you expect them to be. But it **servers it right**.

Because the library was **generated**.

Correcteness of it's functions is tested on (parially generated) corpus of hundreds values.

Performance of it's functions is close to the theoretical maximum.

The only reason it is not the maximum - because there is none. Performance is strongly tied to the data you pass in. And there are too much magic in JS engines. Performance may vary depending on the engine, its version, and even on the surrounding code and number of times you call it. Because of all the optimizations a function can go through.

----

After this elevator pitch let's be frank. There are manual tweaks in almost every function. But all the hard work of figuring out the hard cases and the corner cases was indeed done by the generation. And many optimization ideas were discovered through the analysis of performance of generated functions. But because choosing the final version of a function was a manual process it is not a strong guaranty that my choices were the best.

Also, no matter hundreds or hundred thousands tests are there, in JS you can always write an object that can skip them (e.g with the help of `Proxy`). And there are some objects I didn't include in the tests not because I can't generate functions to recognize them, but because I don't know yet should those object be accepted as a members of some class or rejected.

There are 70+ function in the library right now and it's easy to add more. I'm ready to add them on request. The only obstacle - good function names. They are a little bit chaotic at the moment and probably will change. Sugessions are welcomed.

# Documentation

`is.boxed`
----
Under the `boxed` namespace there are functions that recognize wrapped (boxed) primitives. So `is.boxed.number(v)` will return `true` for `new Number(1)` but `false` for `1`. At the moment I have no clue if there are any reasons for these functions to exist. As I see no use for wrapped primitives.

`is.pob`
----
Under `pob` namespace (stands for `primitive or boxed`) there are functions that recognize both primitive and wrapped values. So `is.pob.number(v)` will return `true` for `1` as well as for `new Number(1)`. I think that these functions are even more useless than those in `is.boxed`.

`is.pure`
----
Under `pure` namespace there are functions that recognize real primitives only. So `is.pure.number(v)` will return `true` for `1` but `false` for `new Number(1)`. As obviously useful these function can be accessed directly. They exist on `is` object as well. So `is.pure.number(v)` is equivalent to `is.number(v)`. And `pure` namespace exists solely for the reason that if you do have boxed primitives in your code, then using `is.pure.number(v)` is more preferable, as it communicates more clearly the fact that only real primitives will pass the check.

Other then that, I'm not sure if there is a need for documentation.

I see no reason to explain in words what a functions like
```javascript
is_number = v => typeof v === "number"
```
do.

Of course, there are more complex function than that, but names should give you a hint, and oneliners (insluded in `JSDoc` comments) are self-explanatory for most cases. And if not - you can check the list of matching values inside `/value_classes`.

I'll add more docs later when I'll figure out how and when it can be helpful. PRs are welcomed.

For now, here is the list of functions:
```
any
arguments
array
array_buffer
array_empty
array_like
array_like_object
array_like_object_stiff
array_like_stiff
array_typed
arrow_function
async_iterable
bigint
boolean
boxed.bigint
boxed.boolean
boxed.infinite
boxed.nan
boxed.number
boxed.primitive_excluding_nil
boxed.string
class
custom_class
date
date_valid
empty_array
empty_map
empty_set
error
falsy
finalization_registry
finite
fn
func
function
function_arrow
infinite
integer
integer_safe
iterable
iterable_async
length
map
map_empty
map_or_weakmap
map_weak
nan
native
native_promise
negative_zero
nil
nothing
null
null_undefined
nullish
number
object
object_or_function
object_plain
plain_object
pob.bigint
pob.blank_string
pob.boolean
pob.empty_string
pob.infinite
pob.nan
pob.number
pob.numeric_string
pob.primitive_excluding_nil
pob.string
pob.string_blank
pob.string_empty
pob.string_numeric
pob.symbol
positive_zero
primitive
primitive_excluding_nil
primitive_excluding_null
primitive_excluding_undefined
promise_like
promise_native
pure.bigint
pure.boolean
pure.infinite
pure.nan
pure.number
pure.primitive
pure.primitive_excluding_nil
pure.primitive_excluding_null
pure.primitive_excluding_undefined
pure.string
pure.symbol
re
ref_weak
regexp
safe_integer
set
set_empty
set_or_weakset
set_weak
string
symbol
truthy
typed_array
undefined
undefined_null
valid_date
weak
weak_map
weak_ref
weak_set
zero
zero_negative
zero_positive
```
