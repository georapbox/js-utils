<a name="whichTransitionEnd"></a>

## whichTransitionEnd() ⇒ <code>string</code>
Detects the supported property name for the `transitionend` event.

**Returns**: <code>string</code> - The supported property name or `undefined` if not supported.  
**Example**  
```js
const transEnd = whichTransitionEnd();
// => eg 'transitionend'

element.addEventListener(transEnd, function () {
  // Do soething...
});
```
