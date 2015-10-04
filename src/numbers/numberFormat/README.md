### [Numbers](../) > formatNumber

```js
formatNumber(nNumber [, nDecimals=0 [, sDecimalSeperator='.' [, sThousandSeperator=',']]])
```

> Formats a number based on the number of decimal points, the decimal seperator and the thousands seperator.
> Returns the formatted number as a string.

- <code>nNumber {number}</code>

The number to format.

- <code>[nDecimals=0] {number}</code>

The number of decimal points the formatted number will have.

- <code>[sDecimalSeperator='.'] {string}</code>

The decimal seperator character(s).

- <code>[sThousandSeperator=','] {string}</code>

The thousands seperator character(s).

#### Example
```js
numberFormat(123456789.12345); // => "123,456,789"
numberFormat(123456789.12345, 3, '.', ','); // => "123,456,789.123"
numberFormat(123456789.12345, 3, ',', '.'); // => "123.456.789,123"
```
