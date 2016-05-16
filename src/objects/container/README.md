<a name="module_Container"></a>

## Container ⇒ <code>Object</code>
Acts as a wrapper/container around the `value` passed in.

**Returns**: <code>Object</code> - The wrapper object containing the value.  
**Category**: Object  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to wrap. |

**Example**  
```js
container(10);
// -> {val: 10}

container('Hello world');
// -> {val: 'Hello world'}

container(['a', 'b', 'c']);
// -> {val: ['a', 'b', 'c']}
```
<a name="module_Container..map"></a>

### Container~map(func) ⇒ <code>Object</code>
Grabs the value from the container and pass it to the function `func`.
When mapping is done the value goes back to the container.

**Kind**: inner method of <code>[Container](#module_Container)</code>  
**Returns**: <code>Object</code> - The container object.  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to use for mapping. |

**Example**  
```js
var
  getFirst = function (item) {
    return item[0];
  },
  capitalize = function (item) {
    return item.toUpperCase();
  },
  reverse = function (arr) {
    return arr.reverse();
  };

var c = container(['a', 'b', 'c']),    // -> {val: ['a', 'b', 'c']}
  reversed = c.map(reverse),           // -> {val: ['c', 'b', 'a']}
  first = reversed.map(getFirst),      // -> {val: 'c'}
  capital = first.map(capitalize),     // -> {val: 'C'}
  match = capital.map(function (val) {
    return val.match(/cat/gi);
  });                                  // -> {val: null}

// The above could be also written like this:
container(['a', 'b', 'c'])
  .map(reverse)
  .map(getFirst)
  .map(capitalize)
  .map(function (val) {
    return val.match(/cat/gi);
  });
```
