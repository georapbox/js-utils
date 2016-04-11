### [Misc](../) > poll

```js
poll(func, [, interval=100] [, successCallback] [, timeout] [, timeoutCallback])
```
> Periodically check for application's status updates.

- `fn {Function}`

The function to be called repeatedly. If returns a truthy value, stop polling.

- `[interval=100] {Number}`

Optional. The time (milliseconds) that `poll` should wait before each call to `fn`. Default is 100 milliseconds.

- `[successCallback] {Function}`

Optional. Function to be executed if `fn` returns any truthy value.

- `[timeout] {Number}`

Optional. The time (milliseconds) to continue calling `fn` until polling times out. If `undefined` or `null` polling never times out and will continue to call `fn` for ever.

- `[timeoutCallback] {Function}`

Optional. Function to be executed if poll times out.

#### Example(s)
```js
/* Example 1 */
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


/* Example 2 */
// Ask for data via an AJAX request every 1000 milliseconds.
// Will run forever.
poll(function () {
    $.ajax('path/to/data/').then(function (res) {
        // Do something with response.
    });
}, 1000);
```
