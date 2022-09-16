<a name="mediaQuery"></a>

## mediaQuery(mediaQueryString, callback, [immediate]) ⇒ <code>function</code>
Determines if the document matches a media query string.

**Returns**: <code>function</code> - Returns a function that when called it will remove the event handler that listens for media query status changes.  
**Throws**:

- <code>TypeError</code> If `mediaQueryString` is not string.
- <code>TypeError</code> If `callback` is not function.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| mediaQueryString | <code>String</code> |  | A string specifying the media query to parse into a MediaQueryList. |
| callback | <code>function</code> |  | Callback function which is invoked whenever the media query status changes. |
| [immediate] | <code>Boolean</code> | <code>true</code> | If `true` the `callback` function is called immediately, otherwise is called only when the media query status changes. |

**Example**
```js
// Start listening for media query status changes.
const unsubscribe = mediaQuery('(min-width: 480px) and (max-width: 768px)', matches => {
  document.body.style.backgroundColor = matches ? 'green' : 'red';
});

// Stop listening for media query status changes.
unsubscribe();
```
