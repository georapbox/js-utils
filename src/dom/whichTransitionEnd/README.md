<a name="whichTransitionEnd"></a>

## whichTransitionEnd() ⇒ <code>string</code>
Detects the supported property name for the `transitionend` event.

**Kind**: global function  
**Returns**: <code>string</code> - The supported property name or `undefined` if not supported.  
**Category**: DOM  
**Example**  
```js
var transEnd = whichTransitionEnd();
// -> eg 'transitionend'

element.addEventListener(transEnd, function () {
  // Do soething...
});
```
