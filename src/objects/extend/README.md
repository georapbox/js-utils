<a name="extend"></a>

## extend(target, object1) ⇒ <code>Object</code>
Merges (deep copy) the contents of two or more objects together into the first object.

**Kind**: global function  
**Returns**: <code>Object</code> - The merged object.  
**Category**: Object  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | The object to extend. It will receive the new properties. |
| object1 | <code>Object</code> | An object containing additional properties to merge in. |
| [...objectN] | <code>Object</code> | Additional objects containing properties to merge in. |

**Example**  
```js
var object1 = {
  apple: 0,
  banana: {
    weight: 52,
    price: 100
  },
  cherry: 97
};

var object2 = {
  banana: {
    price: 200
  },
  durian: 100
};

extend({}, object1, object2);
// -> {apple: 0, banana: {weight: 52, price: 200}, cherry: 97, durian: 100}
```
