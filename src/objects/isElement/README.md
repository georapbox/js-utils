### [Objects](../) > isElement

```js
isElement(value)
```

> Checks if <code>value</code> is a DOM element.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isElement('Lorem ipusm dolr sit amet.'); // => false
isElement(document.body); // => true
isElement(document.getElementsByTagName('head')[0]) // => true
```
