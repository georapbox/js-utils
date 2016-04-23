### [Function](../) > compose

```js
compose([func1] [, funct2] [, func3] [, ...])
```
> Chains together functions to create a new function following the mathematical model of function composition.

In mathematics `f ∘ g` (pronounced "f composed with g") is the function that given `x`, returns `f(g(x))`.
Following the mathematical model `compose(f, g)(x)` should equal `f(g(x))`.
Thus it is made clear that function passed as arguments should be read from right to left.

#### Example
```js
function capitalize(item) {
    return item.toUpperCase();
}

function head(item) {
    return item[0];
}

function reverse(item) {
    return item.split('').reverse().join('');
}

// Example 1: First reverse then capitalize
var convert = compose(capitalize, reverse);
convert('hello'); // => "OLLEH"

// Example 2:  First reverse, then get the first character and finally capitalize
var convert = compose(capitalize, head, reverse);
convert('hello'); // => "O"

// Example 3:  Same as above but combining compositions
var reverseAndHead = compose(head, reverse);
var reverseHeadAndCapitalize = compose(capitalize, reverseAndHead);
reverseHeadAndCapitalize('hello'); // => "O"
```
