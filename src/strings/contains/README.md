### [Strings](../) > contains

```js
contains(subjectString, searchString [, position=0])
```

Determines whether one string may be found within another string, returning true or false as appropriate.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `searchString` _(string)_: A string to be searched for within the original string.

- `[position=0]` _(number)_: Optional. Defaults to 0. The position in the original string at which to begin searching for searchString.

#### Returns

_(boolean)_: Returns true if searchString is found within subjectString, else false.

#### Examples
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
