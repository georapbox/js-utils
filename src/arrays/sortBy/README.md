### [Arrays](../) > sortBy

```js
sortBy(arr, field [, ascending=true] [, primer])
```

> Sorts an array of **objects** (not in place) by a property.

- `arr {Array}`

The array of objects to sort.

- `field {String}`

The property to sort by.

- `[ascending=true] {Boolean}`

Optional. The sorting order. Default is true (ascending). This is not optional if `primer` is required.

- `[primer] {Function}`

Optional. Manipulates the field to sort by.

#### Example
```js
var homes = [{
    "h_id": 8,
    "city": "Dallas",
    "price": "162500"
}, {
    "h_id": 4,
    "city": "Bevery Hills",
    "price": "162500.5"
}, {
    "h_id": 5,
    "city": "new York",
    "price": "162500.1"
}];

sortBy(homes, 'h_id');
// => "[{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":8,"city":"Dallas","price":"162500"}]"

sortBy(homes, 'h_id', false);
// => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"

sortBy(homes, 'price', true);
// => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"

sortBy(homes, 'price', true, function (field) {
    return parseInt(field);
});
// => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"}]"
```
