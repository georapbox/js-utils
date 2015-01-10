##Array.prototype.every()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
>The **every()** method tests whether all elements in the array pass the test implemented by the provided function.

####Syntax
```js
arr.every(callback[, thisArg])
```

- <code>callback</code>

Function to test for each element, taking three arguments:

- <code>currentValue</code>

The current element being processed in the array.

- <code>index</code>

The index of the current element being processed in the array.

- <code>array</code>

The array every was called upon.

- <code>thisArg (Optional)</code>

Value to use as this when executing callback.

---

##Array.prototype.filter()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
>The **filter()** method creates a new array with all elements that pass the test implemented by the provided function.

####Syntax
```js
arr.filter(callback[, thisArg])
```

- ```js
callback
```
Function to test each element of the array. Return true to keep the element, false otherwise.

- ```js
thisArg
```
Value to use as this when executing callback.

---

##Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
>The **forEach()** method executes a provided function once per array element.

####Syntax
```js
arr.forEach(callback[, thisArg])
```

- ```js
callback
```
Function that produces an element of the new Array, taking three arguments:
 - ```js
 currentValue
 ```
 The current element being processed in the array.

 - ```js
 index
 ```
 The index of the current element being processed in the array.

 - ```js
 array
 ```
 The array forEach was called upon.

- ```js
thisArg (Optional)
```
Value to use as this when executing callback.

---

##Array.prototype.indexOf()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
>The **indexOf()** method returns the first index at which a given element can be found in the array, or -1 if it is not present.

####Syntax
```js
arr.indexOf(searchElement[, fromIndex = 0])
```

- ```js
searchElement
```
Element to locate in the array.

- ```js
fromIndex
```
The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the calculated index is less than 0, then the whole array will be searched. Default: 0 (Entire array is searched).

---

##Array.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
>The **lastIndexOf()** method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

####Syntax
```js
arr.lastIndexOf(searchElement[, fromIndex = arr.length])
```

- ```js
searchElement
```
Element to locate in the array.

- ```js
fromIndex (Optional)
```
The index at which to start searching backwards. Defaults to the array's length, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.

---

##Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
>The **map()** method creates a new array with the results of calling a provided function on every element in this array.

####Syntax
```js
arr.map(callback[, thisArg])
```

- ```js
callback
```
Function that produces an element of the new Array, taking three arguments:

 - ```js
 currentValue
 ```
 The current element being processed in the array.

 - ```js
 index
 ```
 The index of the current element being processed in the array.

 - ```js
 array
 ```
 The array map was called upon.

- ```js
thisArg (Optional)
```
Value to use as this when executing callback.

---

##Array.prototype.some()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some
>The **some()** method tests whether some element in the array passes the test implemented by the provided function.

####Syntax
```js
arr.some(callback[, thisArg])
```

- ```js
callback
```
Function to test for each element.

- ```js
thisArg (Optional)
```
Value to use as this when executing callback.