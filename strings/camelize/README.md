##camelize
>Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).

####Syntax
```js
camelize(str [, camelizeSpaces])
```

- ```js
string
```
The string to camelize.

- ```js
camelizeSpaces (Optional)
```
Boolean that indicates if spaces are camelized or not. Default is undefined (falsey).

####Example
```js
camelize('hello_world'); // 'helloWorld'
camelize('-moz-animation'); // 'MozAnimation'
camelize('lorem ipsum', true); // 'loremIpsum'
camelize('lorem ipsum'); // 'lorem ipsum'
```