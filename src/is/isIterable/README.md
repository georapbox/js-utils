<a name="isIterable"></a>

## isIterable(value) ⇒ <code>Boolean</code>
Checks if a value is an iterable.

**Returns**: <code>Boolean</code> - Returns `true` if value is iterable; otherwise `false`.  
**Throws**:

- <code>TypeError</code> If `Symbol` or `Symbol.iterator` is not supported by the environment.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**
```js
function* generatorFunc() {
  yield 'foo';
}

isIterable([]);
// => true

isIterable(new Map());
// => true

isIterable('');
// => true

isIterable(generatorFunc());
// => true

isIterable({});
// => false

isIterable(0);
// => false

isIterable(null);
// => false
```
