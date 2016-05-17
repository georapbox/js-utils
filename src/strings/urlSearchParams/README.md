<a name="urlSearchParams"></a>

## urlSearchParams(searchString) ⇒ <code>Object</code>
Factory function that returns methods that access the URL search parameters.

**Kind**: global function  
**Returns**: <code>Object</code> - A plain object that holds methods to access the URL search parameters.  
**Category**: String  

| Param | Type | Description |
| --- | --- | --- |
| searchString | <code>String</code> | The URL search string. eg "?id=1&fname=Foo&lname=Bar" |

**Example**  
```js
urlSearchParams('?id=1&fname=Foo&lname=Bar');
// -> {get: get(), keys: keys(), values: values()}
```

* [urlSearchParams(searchString)](#urlSearchParams) ⇒ <code>Object</code>
    * [~get([param])](#urlSearchParams..get) ⇒ <code>Array</code>
    * [~keys()](#urlSearchParams..keys) ⇒ <code>Array</code>
    * [~values()](#urlSearchParams..values) ⇒ <code>Array</code>

<a name="urlSearchParams..get"></a>

### urlSearchParams~get([param]) ⇒ <code>Array</code>
Get all search parameters or the value of the one specified.

**Kind**: inner method of <code>[urlSearchParams](#urlSearchParams)</code>  
**Returns**: <code>Array</code> - If `param` is `undefined`, returns an array of plain objects that represent
        the search parameters as key/value pairs. If `param` is specified, returns an array
        of string(s) which is/are the value(s) of the specified parameter key. If the parameter
        specified is not found in the original search query string, an empty array is returned.  

| Param | Type | Description |
| --- | --- | --- |
| [param] | <code>String</code> | The parameter's key we want to access its value. |

**Example**  
```js
urlSearchParams('?id=1&fname=Foo&lname=Bar').get();
// -> [{id: '1'}, {fname: 'Foo'}, {lname: 'Bar'}]

urlSearchParams('?id=1&fname=Foo&lname=Bar').get('id');
// -> ['1']

urlSearchParams('?id=1&fname=Foo&lname=Bar').get('fname');
// -> ['Foo']

urlSearchParams('?id=1&fname=Foo&lname=Bar').get('lname');
// -> ['Bar']

urlSearchParams('?id=1&fname=Foo&lname=Bar').get('something');
// -> []
```
<a name="urlSearchParams..keys"></a>

### urlSearchParams~keys() ⇒ <code>Array</code>
Get all "keys" from the URL search string.

**Kind**: inner method of <code>[urlSearchParams](#urlSearchParams)</code>  
**Returns**: <code>Array</code> - An array holding the "keys" found in the search string.  
**Example**  
```js
urlSearchParams('?id=1&fname=Foo&lname=Bar').keys();
// -> ['id', 'fname', 'lname']
```
<a name="urlSearchParams..values"></a>

### urlSearchParams~values() ⇒ <code>Array</code>
Get all "values" for each "key" from the URL search string.

**Kind**: inner method of <code>[urlSearchParams](#urlSearchParams)</code>  
**Returns**: <code>Array</code> - An array holding the "values" for each "key(s)" that is found in the search string.  
**Example**  
```js
urlSearchParams('?id=1&fname=Foo&lname=Bar').values();
// -> ['1', 'Foo', 'Bar']
```
