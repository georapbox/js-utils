##sortBy
http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
>Sorts an **array of objects** by a property.

####Syntax
```js
sortBy(arr, field, [ascending], [primer])
```

- ```js
arr {Array}
```
The array of objects to sort.

- ```js
field {String}
```
The property to sort by.

- ```js
ascending {Boolean} (Optional)
```
The sorting order. Default is true (ascending).

- ```js
primer {Function} (Optional)
```
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










