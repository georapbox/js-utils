<a name="isPlainObject"></a>

## isPlainObject(value) ⇒ <code>Boolean</code>
Checks if a value is a plain object.

An object is considered to be plain if it's created by `{}`, `new Object()`, or `Object.create(null)`.

**Returns**: <code>Boolean</code> - True if value is a plain object, else false.  
**Note**: Use with caution as host objects (or objects used by browser host environments to complete the execution environment of ECMAScript) have a number of inconsistencies which are difficult to robustly feature detect cross-platform.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
function Foo() {
  this.a = 1;
}

isPlainObject({});
// => true

isPlainObject({foo: 'bar'});
// => true

isPlainObject(new Object({foo: 'bar'}));
// => true

isPlainObject(new Foo());
// => false

isPlainObject(Object.create(null));
// => true

isPlainObject(Object.create({}));
// => false

isPlainObject(Object.create({foo: 'bar'}));
// => false

isPlainObject([1, 2, 3]);
// => false

isPlainObject(null);
// => false

isPlainObject();
// => false

isPlainObject(100);
// => false

isPlainObject('lorem ipsum');
// => false
```
