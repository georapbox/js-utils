<a name="whichAnimationEnd"></a>

## whichAnimationEnd() ⇒ <code>String</code>
Detects the supported property name for the `animationend` event.

**Returns**: <code>String</code> - The supported property name or `undefined` if not supported.  
**Category**: DOM  
**Example**  
```js
var animEnd = whichAnimationEnd();
// -> eg 'animationend'

element.addEventListener(animEnd, function () {
  // Do soething...
});
```
