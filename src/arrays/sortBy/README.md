### [Arrays](../) > sortBy

```js
sortBy(array, field [, ascending=true] [, primer])
```

Sorts an array of **objects** (not in place) by a property.

#### Arguments

- `array` _(array)_: The array of objects to sort.

- `field` _(string)_: The property to sort by.

- `[ascending=true]` _(boolean)_: Optional. Default value is `true` (ascending). The sorting order. This is not optional if `primer` is required.

- `[primer]` _(function)_: Optional. Manipulates the field to sort by.

#### Returns

_(array)_: A new sorted array.

#### Examples
```js
var homes = [{
    h_id: 8,
    city: 'Dallas',
    price: '162500'
}, {
    h_id: 4,
    city: 'Bevery Hills',
    price: '162500.5'
}, {
    h_id: 5,
    city: 'new York',
    price: '162500.1'
}];

sortBy(homes, 'h_id');
// -> "[{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":8,"city":"Dallas","price":"162500"}]"

sortBy(homes, 'h_id', false);
// -> "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"

sortBy(homes, 'price', true);
// -> "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"

sortBy(homes, 'price', true, function (field) {
    return parseInt(field);
});
// -> "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"}]"
```
