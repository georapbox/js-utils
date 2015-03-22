###[Objects](../) > extend

```js
extend({}, obj1, objN)
```

>Merges (deep copy) the contents of two or more objects together into the first object.

####Example
```js
var object1 = {
    apple: 0,
    banana: { weight: 52, price: 100 },
    cherry: 97
};

var object2 = {
    banana: { price: 200 },
    durian: 100
};

extend({}, object1, object2); // {"apple":0,"banana":{"weight":52,"price":200},"cherry":97,"durian":100}
```