##findIndex
>Returns the index of the first element that passes the callback check.

>If no element passes the callback check, returns -1.

####Syntax
```js
findIndex(array, callback)
```

- <code>array</code>

The array to check.

- <code>callback</code>

The function called per iteration.

####Example
```js
var heroes = [
    {
        name: 'Bruce Wayne',
        hero: 'Batman'
    },
    {
        name: 'Clark Kent',
        hero: 'Superman',
        specialPowers: ['speed', 'flying', 'strength']
    },
    {
        name: 'Peter Parker',
        hero: 'Spiderman',
        specialPowers: ['climbing']
    }
];

var characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

var numbers = [1, 2, 3];

findIndex(characters, function (chr, index, array) {
    return chr === 'E';
});
// => 4

findIndex(heroes, function (hero, index, array) {
    return hero.name === 'Clark Kent';
});
// => 1

findIndex(heroes, function (hero, index, array) {
    if (hero.specialPowers) {
        for (var i = 0; i < hero.specialPowers.length; i++) {
            if (hero.specialPowers[i] === 'climbing') return true;
        }
    }
});
// => 2

findIndex(numbers, function (n) {
    return n > 10;
});
// => -1
```