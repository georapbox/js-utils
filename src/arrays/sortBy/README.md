##sortBy
http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
>Sorts an **array of objects** by a property.

####Syntax
```js
sortBy(arr, field, [ascending], [primer])
```

- <code>arr {Array}</code>

The array of objects to sort.

- <code>field {String}</code>

The property to sort by.

- <code>ascending {Boolean} (Optional)</code>

The sorting order. Default is true (ascending).

- <code>primer {Function} (Optional)</code>

Manipulates the field to sort by.

####Example
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










