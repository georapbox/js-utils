### [is](../) > isObject

```js
isObject(value)
```

Checks if `value` is the language type of `Object`.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is object, else returns `false`.

#### Examples
```js
isObject({});
// -> true

isObject(function test() {});
// -> true

isObject([1, 2, 3]);
// -> true

isObject('Hello World!');
// -> false

isObject(false);
// -> false

isObject(new String('Hello world'));
// -> true

isObject();
// -> false
```
