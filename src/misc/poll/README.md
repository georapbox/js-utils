<a name="poll"></a>

## poll(func, [interval], [successCallback], [timeout], [timeoutCallback])
Periodically check for application's status updates.

**Kind**: global function  
**Category**: Misc  
**Throws**:

- <code>TypeError</code> If `func` is not function.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | The function to be called repeatedly. If returns a truthy value, stop polling. |
| [interval] | <code>Number</code> | <code>100</code> | Optional. The time (milliseconds) that `poll` should wait before each call to `func`. |
| [successCallback] | <code>function</code> |  | Optional. Function to be executed if `func` returns truthy a value. |
| [timeout] | <code>Number</code> |  | Optional. The time (milliseconds) to continue calling `func` until polling times out.        If `undefined` or `null` polling never times out and will continue to call `func` for ever. |
| [timeoutCallback] | <code>function</code> |  | Optional. Function to be executed if poll times out. |

**Example**  
```js
// Periodically check every 500 milliseconds if popup element is visible.
// If is not visible after 3000 milliseconds, throw error else
// log a success message on the console.
poll(function () {
  return document.getElementById('myPopup').style.display === 'block';
}, 500, function() {
  console.log('Popup is now visible');
}, 3000, function(fn, args) {
  throw new Error('Timed out for ' + fn + ': ' + args)
});

// Ask for data via an AJAX request every 1000 milliseconds.
// Will run forever.
poll(function () {
  $.ajax('path/to/data/').then(function (res) {
    // Do something with response.
  });
}, 1000);
```
