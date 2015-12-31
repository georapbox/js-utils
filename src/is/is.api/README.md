### [is](../) > is.api

> **is.api** is a minimal API for the ```is``` functions that provides ```not```, ```all``` and ```any``` interfaces,
so that they can be used in a more functional way.

**is.api** exposes a global variable ```is``` with only 4 methods by default.
This gives the ability to add as many functions as one desires according to the project.


## API default public methods

- **extend(object)**<br>
Use this method to include any functions to be used with the API.<br>
**NOTE** Use only functions that return a ```boolean``` for the API to work properly.

- **not**<br>
Calls the predicate function and reverses the sense of the predicate result

- **all**<br>
Calls the predicate function per parameter and returns true if **all** pass

- **any**<br>
Calls the predicate function per parameter and returns true if **any** pass


## How to use
```js
/* Include the functions we want to use so that the become methods of the is object */
is.extend({
    'array': isArray,
    'boolean': isBoolean,
    ...
});

/* Check if a value is array */
is.array([1, 2, 3]); // => true
is.array({foo: 'bar'}); // => false

/* Check if a value is NOT an array */
is.not.array([1, 2, 3]); // => false
is.not.array({foo: 'bar'}); // => true

/* Check if all values are arrays */
is.all.array([1, 2, 3], ['a', 'b', 'c']); // => true
is.all.array([1, 2, 3], 10); // => false

/* Check if any of the values are arrays */
is.any.array([1, 2, 3], 10); // => true
is.any.array(5, 10); // => false
```
