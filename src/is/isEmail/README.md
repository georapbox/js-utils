### [is](../) > isEmail

```js
isEmail(value)
```

Validates a string as email address.

#### Arguments

- `value` _(string)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is a valid email, else returns `false`.

#### Examples
```js
isEmail('me@example.com';
// -> true

isEmail('a.nonymous@example.com';
// -> true

isEmail('name+tag@example.com';
// -> true

isEmail('name\@tag@example.com');
// -> false

isEmail('name@tag@example.com');
// -> false

isEmail('spaces are allowed@example.com');
// -> false

isEmail("!#$%&'+-/=.?^`{|}~@[1.0.0.127]");
// -> false

isEmail("!#$%&'+-/=.?^`{|}~@[IPv6:0123:4567:89AB:CDEF:0123:4567:89AB:CDEF]");
// -> false
```
