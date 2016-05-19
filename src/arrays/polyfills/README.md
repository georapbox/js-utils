## Array.from()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from

```js
Array.from(arrayLike[, mapFn[, thisArg]])
```

The Array.from() method creates a new Array instance from an array-like or iterable object. In ES6, class syntax allows for the subclassing of both built-in and user defined classes; as a result, class-side static methods such as Array.from are "inherited" by subclasses of Array and create new instances of the subclass, not Array.

#### Arguments

- `arrayLike`: An array-like or iterable object to convert to an array.

- `[mapFn]`: Optional. Map function to call on every element of the array.

- `[thisArg]`: Optional. Value to use as this when executing mapFn.


## Array.prototype.every()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every


```js
arr.every(callback[, thisArg])
```

The **every()** method tests whether all elements in the array pass the test implemented by the provided function.

#### Arguments

- `callback`: Function to test for each element, taking three arguments:
 - `currentValue`: The current element being processed in the array.
 - `index`: The index of the current element being processed in the array.
 - `array`: The array every was called upon.


- `[thisArg]`: Optional. Value to use as this when executing callback.


## Array.prototype.filter()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

```js
arr.filter(callback[, thisArg])
```

The **filter()** method creates a new array with all elements that pass the test implemented by the provided function.

#### Arguments

- `callback`: Function to test each element of the array. Return true to keep the element, false otherwise.

- `[thisArg]`: Optional. Value to use as this when executing callback.


## Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

```js
arr.forEach(callback[, thisArg])
```

The **forEach()** method executes a provided function once per array element.

#### Arguments

- `callback`: Function that produces an element of the new Array, taking three arguments:
 - `currentValue`: The current element being processed in the array.
 - `index`: The index of the current element being processed in the array.
 - `array`: The array forEach was called upon.


- `[thisArg]`: Optional. Value to use as this when executing callback.


## Array.prototype.indexOf()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

```js
arr.indexOf(searchElement[, fromIndex=0])
```

The **indexOf()** method returns the first index at which a given element can be found in the array, or -1 if it is not present.

#### Arguments

- `searchElement`: Element to locate in the array.

- `[fromIndex=0]`: Optional. The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the calculated index is less than 0, then the whole array will be searched. Default: 0 (Entire array is searched).


## Array.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

```js
arr.lastIndexOf(searchElement[, fromIndex=arr.length])
```

The **lastIndexOf()** method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

#### Arguments

- `searchElement`: Element to locate in the array.

- `[fromIndex=arr.length]`: Optional. The index at which to start searching backwards. Defaults to the array's length, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.


## Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

```js
arr.map(callback[, thisArg])
```

The **map()** method creates a new array with the results of calling a provided function on every element in this array.

#### Arguments

- `callback`: Function that produces an element of the new Array, taking three arguments:
  - `currentValue`: The current element being processed in the array.
  - `index`:The index of the current element being processed in the array.
  - `array`: The array map was called upon.


- `[thisArg]`: Optional. Value to use as this when executing callback.


## Array.prototype.some()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

```js
arr.some(callback[, thisArg])
```

The **some()** method tests whether some element in the array passes the test implemented by the provided function.

#### Arguments

- `callback`: Function to test for each element.

- `[thisArg]`: Optional. Value to use as this when executing callback.


## Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

```js
arr.reduce(callback[, initialValue])
```

The **reduce()** method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

#### Arguments

- `callback`: Function to execute on each value in the array, taking four arguments:
 - `previousValue`: The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)
 - `currentValue`: The current element being processed in the array.
 - `index`: The index of the current element being processed in the array.
 - `array`: The array reduce was called upon.


- `[initialValue]`: Optional. Value to use as the first argument to the first call of the callback.
