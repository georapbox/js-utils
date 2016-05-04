### [DOM](../) > isEventSupported

```js
isEventSupported(eventName [, element])
```

Checks if an event is supported in a browser environment.

#### Arguments

- `eventName` _(string)_: The name of the event to check if is supported.

- `[element]` _(object)_: Optional. An HTML node to check if an event is supported on. Use it if you need to check for an event on a specific element. Some events are supported on specific elements, eg `online` is supported on `window` but not on a `div` element. If omitted the results are cached and next calls with the same `eventName` will return the results from cache.

#### Returns

_(boolean)_: Returns true if event is supported, else false.

#### Examples
```js
isEventSupported('submit');
// -> true - Checks on a `form` element

isEventSupported('click');
// -> true - Checks on a `div` element

isEventSupported('resize');
// -> false - Checks on a `div` element

isEventSupported('resize', window);
// -> true - Checks on a `window`

isEventSupported('keyup');
// -> true - Checks on a `div` element

isEventSupported('keyup', document.createElement('input'));
// -> true - Checks on an `input` element

```
