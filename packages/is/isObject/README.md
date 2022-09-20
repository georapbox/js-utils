<a name="isObject"></a>

## isObject(value) ⇒ <code>Boolean</code>
Checks if a value is the [language type](https://262.ecma-international.org/#sec-ecmascript-language-types) of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)

**Returns**: <code>Boolean</code> - Returns `true` if `value` is an object, else `false`.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isObject({});
// => true

isObject(Object.create({}));
// => true

isObject(Object.create(null));
// => true

isObject(function test() {});
// => true

isObject([1, 2, 3]);
// => true

isObject(new Number(0));
// => true

isObject(new String('Hello world'));
// => true

isObject(new RegExp('s+')));
// => true

isObject(/s+/);
// => true

isObject(new Map());
// => true

isObject(new Set());
// => true

isObject(1);
// => false

isObject('Hello world');
// => false

isObject(null);
// => false

isObject(Boolean(1));
// => false

isObject(Symbol('foo'));
// => false
```
