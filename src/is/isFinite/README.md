### [is](../) > isFinite

```js
isFinite(value)
```

> Checks if <code>value</code> is a finite number.

> Returns true if 'value' is a finite number, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isFinite(Infinity);  // => false
isFinite(NaN);       // => false
isFinite(-Infinity); // => false
isFinite(0);         // => true
isFinite(2e64);      // => true
isFinite(null);      // => false
isFinite(undefined); // => false
isFinite('0');       // => false
```
