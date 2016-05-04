### [Objects](../) > extend

```js
extend(targetObj [, obj1] [, obj2] [, ...objN])
```

Merges (deep copy) the contents of two or more objects together into the first object.

#### Arguments

- `targetObj` _(object)_: The object to extend.

- `[, obj1] [, obj2] [, ...objN]` _(object)_: Additional objects containing properties to merge in.

#### Returns

_(object)_: Returns the merged object.

#### Example
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
// -> {"apple":0,"banana":{"weight":52,"price":200},"cherry":97,"durian":100}
```
