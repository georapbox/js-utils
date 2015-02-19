##isElement
> Checks if 'value' is a DOM element.

####Syntax
```js
isElement(value)
```

- <code>value</code>

The value to check.

####Example
```js
isElement('Lorem ipusm dolr sit amet.'); // => false
isElement(document.body); // => true
isElement(document.getElementsByTagName('head')[0]) // => true
```