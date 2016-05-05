### [Strings](../) > stripPunctuation

```js
stripPunctuation(subjectString)
```

Removes all of the punctuation.

#### Arguments

- `subjectString` _(string)_: The string from which to to remove punctuation.

#### Returns

_(string)_: Returns the stripped string.

#### Example
```js
var str = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';

stripPunctuation(str);
// -> You cant make an omelet without breaking a few eggs
```
