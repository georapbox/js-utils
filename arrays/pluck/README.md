##pluck
>Retrieves the value of a specified property from all elements in an array.

####Syntax
```js
pluck(array, key)
```

- ```js
array
```
The array to iterate over.

- ```js
key
```
The name of the property to pluck.

####Example
```js
var books = [
	{ title: 'Around the World in Eighty Days', author: 'Jules Verne' },
	{ title: 'The Mist', author: 'Stephen King' },
	{ title: 'Journey to the Center of the Earth', author: 'Jules Verne' },
	{ title: 'The Monster in the Closet', author: 'Stephen King' }
];

pluck(books, 'title');
// ["Around the World in Eighty Days", "The Mist", "Journey to the Center of the Earth", "The Monster in the Closet"]

pluck(books, 'author');
// ["Jules Verne", "Stephen King", "Jules Verne", "Stephen King"]
```