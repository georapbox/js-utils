### [Strings](../) > urlSearchParams

```js
urlSearchParams(searchString)
```

Returns an object that holds methods to access the URL search parameters.

#### Arguments

- `searchString` _(string)_: The URL search string. eg "?id=1&fname=Foo&lname=Bar"

#### Methods available

```js
.get([param])
```

Get all search parameters or the value of the one specified. If `param` is `undefined`, returns an array of plain objects that represent the search parameters as key/value pairs. If `param` is specified, returns an array of string(s) which is/are the value(s) of the specified parameter key. If the parameter specified is not found in the original search query string, an empty array is returned.

#### Arguments

- `[param]` _(string)_: Optional. The parameter's key we want to access its value.

#### Returns

_(array)_: Returns the search parameters.


```js
.keys()
```

Get all "keys" from the URL search string.

#### Returns

_(array)_: Returns the "keys" found in the search string.


```js
.values()
```

Get all "values" for each "key" from the URL search string.

#### Returns

_(array)_: Returns the "values" for each "key(s)" that is found in the search string.

#### Examples
```js
var search = '?id=1&fname=Foo&lname=Bar';
var params = urlSearchParams(search);

params.get();
// -> [{id: '1'}, {fname: 'Foo'}, {lname: 'Bar'}]

params.get('id');
// ->  ['1']

params.get('fname');
// ->  ['Foo']

params.get('lname');
// ->  ['Bar']

params.get('something');
// ->  []

params.keys();
// -> ['id', 'fname', 'lname']

params.values();
// -> ['1', 'Foo', 'Bar']
```
