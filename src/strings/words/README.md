### [Strings](../) > words

```js
words(subjectString)
```

Splits string into an array of its words.

#### Arguments

- `subjectString` _(string)_: The string to process.

#### Returns

_(array)_: Returns the string's words.

#### Examples
```js
words('Hello world!        \n This is a message     from outer\tspace.');
// -> ['Hello', 'world!', 'This', 'is', 'a', 'message', 'from', 'outer', 'space.']

words('');
// -> []

words();
// -> Throws TypeError.

words(100);
// -> Throws TypeError.
```
