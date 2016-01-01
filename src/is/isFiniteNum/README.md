### [is](../) > isFiniteNum

```js
isFiniteNum(value)
```

> Checks if <code>value</code> is a finite number.

> Returns true if 'value' is a finite number, else returns false.

- <code>value {Number}</code>

The number to check if finite.

#### Example
```js
isFiniteNum(Infinity);  // => false
isFiniteNum(NaN);       // => false
isFiniteNum(-Infinity); // => false
isFiniteNum(0);         // => true
isFiniteNum(2e64);      // => true
isFiniteNum(null);      // => throws TypeError
isFiniteNum(undefined); // => throws TypeError
isFiniteNum('0');       // => throws TypeError
```
