### [Strings](../) > stripPunctuation

```js
stripPunctuation(string)
```

> Removes all of the punctuation.

- <code>string {String}</code>

The string from which to to remove punctuation.

#### Example
```js
var str = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';
stripPunctuation(str); // => You cant make an omelet without breaking a few eggs
```
