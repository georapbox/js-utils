<a name="classnames"></a>

## classnames() ⇒ <code>String</code>
Creates a string by conditionally joining classNames together.

**Returns**: <code>String</code> - Returns the final concatenated string.

| Param | Type | Description |
| --- | --- | --- |
| ...arguments | <code>String</code> \| <code>Object</code> | List of classes to be joined. Falsy arguments or arguments of unsupported type are ignored. |

**Example**
```js
classnames('foo', 'bar');
// -> 'foo bar'

classnames('foo', { bar: true });
// -> 'foo bar'

classnames('foo', { bar: false });
// -> 'foo'

classnames({ foo: true }, { bar: true });
// -> 'foo bar'

classnames({ foo: true, bar: true });
// -> 'foo bar'

classnames('foo', 0, false, undefined, null, { bar: 1 }, NaN, { baz: 0 }); // falsy values are ignored
// -> 'foo bar'
```
