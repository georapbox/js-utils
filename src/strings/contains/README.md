### [Strings](../) > contains

```js
contains(subjectString, searchString [, position=0])
```

> Determines whether one string may be found within another string, returning true or false as appropriate.

- `subjectString {String}`

The string to process.

- `searchString {String}`

A string to be searched for within the original string.

- `[position=0] {Number}`

The position in the original string at which to begin searching for searchString; defaults to 0.

#### Example
```js
var str = 'To be, or not to be, that is the question.';

contains(str, 'To be');
// -> true

contains(str, 'question');
// -> true

contains(str, 'nonexistent');
// -> false

contains(str, 'To be', 1);
// -> false

contains(str, 'TO BE');
// -> false
```
