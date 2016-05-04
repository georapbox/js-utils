### [Numbers](../) > formatNumber

```js
formatNumber(nNumber [, nDecimals=0 [, sDecimalSeperator='.' [, sThousandSeperator=',']]])
```

Formats a number based on the number of decimal points, the decimal seperator and the thousands seperator.

#### Arguments

- `nNumber` _(number)_: The number to format.

- `[nDecimals=0]` _(number)_: Optional. Default value is 0. The number of decimal points the formatted number will have.

- `[sDecimalSeperator='.']` _(string)_:Optional. Default value is '.'. The decimal seperator character(s).

- `[sThousandSeperator=',']` _(string)_: Optional. Default value is ',' The thousands seperator character(s).

#### Returns

_(string)_: Returns the formatted number as a string.

#### Examples
```js
numberFormat(123456789.12345);
// -> "123,456,789"

numberFormat(123456789.12345, 3, '.', ',');
// -> "123,456,789.123"

numberFormat(123456789.12345, 3, ',', '.');
// -> "123.456.789,123"
```
