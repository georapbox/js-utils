<a name="isEmail"></a>

## isEmail(value) ⇒ <code>Boolean</code>
Validates a string as email address.

**Returns**: <code>Boolean</code> - True if valid email, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | The string to validate. |

**Example**  
```js
isEmail('me@example.com';
// => true

isEmail('a.nonymous@example.com';
// => true

isEmail('name+tag@example.com';
// => true

isEmail('name\@tag@example.com');
// => true

isEmail('name@tag@example.com');
// => true

isEmail('spaces are allowed@example.com');
// => true

isEmail("!#$%&'+-/=.?^`{|}~@[1.0.0.127]");
// => true

isEmail("!#$%&'+-/=.?^`{|}~@[IPv6:0123:4567:89AB:CDEF:0123:4567:89AB:CDEF]");
// => false
```
