### [Objects](../) > isNaN

```js
isNaN(value)
```

> Determines whether a value is NaN or not. <br/>

> NOTE: NaN is number and it is also the only primitive value which does not equal itself.

- <code>value {\*}</code>

The value to check if is ```NaN```.

#### Example
```js
isNaN(5); // => false
isNaN('hello world'); // => false
isNaN(undefined) // => false
isNaN(null) // => false
isNaN({}) // => false
isNaN(NaN) // => true

var a, b = a + 5;
isNaN(b) // => true (undefined + 5 = NaN)

var a = null, b = a + 5;
isNaN(b) // => false (null + 5 = 5)
```
