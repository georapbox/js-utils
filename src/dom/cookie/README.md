<a name="module_cookie"></a>

## cookie

* [cookie](#module_cookie)
    * [~set(name, value, [options], [options[&#x27;max-age&#x27;]])](#module_cookie..set) ⇒ <code>void</code>
    * [~get([name])](#module_cookie..get) ⇒ <code>String</code>
    * [~remove(name)](#module_cookie..remove) ⇒ <code>void</code>

<a name="module_cookie..set"></a>

### cookie~set(name, value, [options], [options[&#x27;max-age&#x27;]]) ⇒ <code>void</code>
Creates a new cookie.

**Kind**: inner method of [<code>cookie</code>](#module_cookie)  
**Throws**:

- <code>TypeError</code> If `name` is not string.
- <code>TypeError</code> If `value` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>String</code> |  | The name of the cookie to create. |
| value | <code>String</code> |  | The value of the cookie to create. |
| [options] | <code>Object</code> |  |  |
| [options.path] | <code>String</code> | <code>&quot;/&quot;</code> | The path where cookie is visible. If not specified, defaults to the current path of the current document location. |
| [options.domain] | <code>String</code> |  | The domain where cookie is visible. If not specified, this defaults to the host portion of the current document location. If a domain is specified, subdomains are always included. |
| [options.expires] | <code>String</code> |  | A date in GMTString format that tells when cookie expires. If not specified it will expire at the end of session. If date is in the past, then the cookie is deleted. Use `Date.prototype.toUTCString()` to properly format it. |
| [options['max-age']] | <code>Number</code> |  | Max age in seconds from the time the cookie is set; alternative to `expires`. If not specified it will expire at the end of session. If zero or negative, then the cookie is deleted. |
| [options.secure] | <code>String</code> |  | Cookie to only be transmitted over secure protocol as https. |
| [options.samesite] | <code>String</code> |  | SameSite prevents the browser from sending this cookie along with cross-site requests. Possible values are "lax", "strict" or "none". |

**Example**
```js
cookie.set('foo', 'bar', {
  path: '/',
  domain: 'example.com',
  'max-age': 3600, // value in seconds; expires after one hour from the current time
  secure: true,
  samesite: 'strict'
});
// => undefined
```
<a name="module_cookie..get"></a>

### cookie~get([name]) ⇒ <code>String</code>
Get a cookie by its name.

**Kind**: inner method of [<code>cookie</code>](#module_cookie)  
**Returns**: <code>String</code> - Returns the value of the cookie if exists; otherwise an empty string.  
**Throws**:

- <code>TypeError</code> If `name` is not string.


| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>String</code> | The name of the cookie to get. |

**Example**
```js
cookie.get('foo');
// => 'bar'

cookie.get('cookie-that-does-not-exist');
// => ''
```
<a name="module_cookie..remove"></a>

### cookie~remove(name) ⇒ <code>void</code>
Deletes a cookie by its name.

**Kind**: inner method of [<code>cookie</code>](#module_cookie)  
**Throws**:

- <code>TypeError</code> If `name` is not string.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the cookie to delete. |

**Example**
```js
cookie.remove('foo');
// => undefined
```
