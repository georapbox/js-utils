<a name="extend"></a>

## extend([deep], target, object1, [objectN]) ⇒ <code>Object</code>
Merge the contents of two or more objects together into the first object.

Keep in mind that the target object (first argument) will be modified, and will also be returned from `extend()`.
If, however, you want to preserve both of the original objects, you can do so by passing an empty object as the target:

`var object = extend({}, object1, object2);`

The merge performed by `extend()` is not recursive by default; if a property of the first object
is itself an object or array, it will be completely overwritten by a property with the same key
in the second or subsequent object. The values are not merged.
However, by passing true for the first function argument, objects will be recursively merged.

**Warning:** Passing false for the first argument is not supported.

Undefined properties are not copied. However, properties inherited from the object's prototype will be copied over.
Properties that are an object constructed via new MyCustomObject(args), or built-in JavaScript types such as
Date or RegExp, are not re-constructed and will appear as plain Objects in the resulting object or array.

On a deep extend, Object and Array are extended, but object wrappers on primitive types such as
String, Boolean, and Number are not. Deep-extending a cyclical data structure will result in an error.

**Returns**: <code>Object</code> - The merged object.  
**Category**: Object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [deep] | <code>Boolean</code> | <code>false</code> | If true, the merge becomes recursive (aka. deep copy). |
| target | <code>Object</code> |  | An object that will receive the new properties if additional objects are passed. |
| object1 | <code>Object</code> |  | An object containing additional properties to merge in. |
| [objectN] | <code>Object</code> |  | Additional objects containing properties to merge in. |

**Example**  
```js
// EXAMPLE 1
// Merge two objects, modifying the first.
var object1 = {
  apple: 0,
  banana: {weight: 52, price: 100},
  cherry: 97
};

var object2 = {
  banana: {price: 200},
  durian: 100
};

extend(object1, object2);
// -> {"apple": 0, "banana": {"price": 200}, "cherry": 97, "durian": 100}

// EXAMPLE 2
// Merge two objects recursively, modifying the first.
var object1 = {
  apple: 0,
  banana: {weight: 52, price: 100},
  cherry: 97
};
var object2 = {
  banana: {price: 200},
  durian: 100
};

extend(true, object1, object2);
// -> {"apple": 0, "banana": {"weight": 52, "price": 200}, "cherry": 97, "durian": 100}

// EXAMPLE 3
var defaults = {validate: false, limit: 5, name: "foo"};
var options = {validate: true, name: "bar"};

// Merge defaults and options, without modifying defaults
var settings = extend({}, defaults, options);

// -> defaults -- {"validate": false, "limit": 5, "name": "foo"}
// -> options -- {"validate": true, "name": "bar"}
// -> settings -- {"validate": true, "limit": 5, "name": "bar"}
```
