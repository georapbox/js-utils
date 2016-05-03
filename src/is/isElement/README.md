### [is](../) > isElement

```js
isElement(value)
```

Checks if `value` is a DOM element.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is a DOM element, else returns `false`.

#### Examples
```js
isElement('Lorem ipusm dolr sit amet.');
// -> false

isElement(document.body);
// -> true

isElement(document.getElementsByTagName('head')[0])
// -> true
```
