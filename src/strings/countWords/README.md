### [Strings](../) > countWords

```js
countWords(subjectString)
```

Counts the number of words in a string.

#### Arguments

- `subjectString` _(string)_: The string to process.

#### Returns

_(number)_: Returns the number of words.

#### Examples
```js
countWords('Hello world!        \n This is a message     from outter\tspace.');
// -> 9

countWords('');
// -> 0

countWords();
// -> Throws TypeError.

countWords(100);
// -> Throws TypeError.
```
