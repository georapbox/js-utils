<a name="module_is"></a>

## is
**is** is a minimal API for the `Is` category functions that provides `not`, `all` and `any` interfaces,
so that they can be used in a more functional way.

**is** exposes a global variable `is` with only 4 methods by default.
This gives the ability to add as many functions as one desires according to the project.

**Category**: Is  
**Example**  
```js
// Include the functions we want to use so that the become methods of the is object
is.extend({
  'array': isArray,
  'boolean': isBoolean,
  ...
});

// Check if a value is array
is.array([1, 2, 3]);
// -> true

is.array({foo: 'bar'});
// -> false

// Check if a value is NOT an array
is.not.array([1, 2, 3]);
// -> false

is.not.array({foo: 'bar'});
// -> true

// Check if all values are arrays
is.all.array([1, 2, 3], ['a', 'b', 'c']);
// -> true

is.all.array([1, 2, 3], 10);
// -> false

// Check if any of the values are arrays
is.any.array([1, 2, 3], 10);
// -> true

is.any.array(5, 10);
// -> false
```

* [is](#module_is)
    * [~not()](#module_is..not)
    * [~all()](#module_is..all)
    * [~any()](#module_is..any)
    * [~extend()](#module_is..extend)

<a name="module_is..not"></a>

### is~not()
Calls the predicate function and reverses the sense of the predicate result.

**Kind**: inner method of <code>[is](#module_is)</code>  
<a name="module_is..all"></a>

### is~all()
Calls the predicate function per parameter and returns true if all pass.

**Kind**: inner method of <code>[is](#module_is)</code>  
<a name="module_is..any"></a>

### is~any()
Calls the predicate function per parameter and returns true if any pass.

**Kind**: inner method of <code>[is](#module_is)</code>  
<a name="module_is..extend"></a>

### is~extend()
Use this method to include any functions to be used with the API.

**Kind**: inner method of <code>[is](#module_is)</code>  
**Note**: Use only functions that return a boolean for the API to work properly.  
