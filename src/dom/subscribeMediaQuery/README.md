<a name="subscribeMediaQuery"></a>

## subscribeMediaQuery(query, callback, [immediate]) ⇒ <code>function</code>
Subscribes to the matching state of a CSS media query.

By default, `callback` is invoked immediately with the current matching
state and again whenever the media query status changes.

Returns a function that removes the change listener when invoked.

For a one-time snapshot, use `window.matchMedia(query).matches` instead.

**Kind**: global function  
**Returns**: <code>function</code> - A function that removes the media query change listener.  
**Throws**:

- <code>TypeError</code> If `query` is not a string or `callback` is not a function.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| query | <code>string</code> |  | The CSS media query to evaluate. |
| callback | <code>function</code> |  | The function invoked with `matches`, a boolean indicating whether the media query matches. |
| [immediate] | <code>boolean</code> | <code>true</code> | Whether to invoke `callback` immediately. |

**Example**  
```js
const unsubscribe = subscribeMediaQuery('(min-width: 768px)', matches => {
  document.body.style.backgroundColor = matches ? 'green' : 'red';
});

// Stop listening for changes.
unsubscribe();

// Listen only for future changes.
const stopListening = subscribeMediaQuery('(prefers-color-scheme: dark)', matches => {
  console.log(matches);
}, false);

stopListening();
```
