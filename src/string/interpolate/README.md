<a name="interpolate"></a>

## interpolate(str, [data]) ⇒ <code>string</code>
Replaces placeholders in a string with values from an object.

Placeholders use `{{key}}` syntax and support nested properties
through dot notation, such as `{{person.name.first}}`.

Only string and number values are substituted. Missing properties
and other value types leave the original placeholder unchanged.
Substitution is performed in a single pass.

Values are inserted as plain strings without HTML escaping.
This utility does not parse or sanitize HTML.

**Kind**: global function  
**Returns**: <code>string</code> - The interpolated string.  
**Throws**:

- <code>TypeError</code> If `str` is not a string.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string containing placeholders. |
| [data] | <code>object</code> | The object containing replacement values. |

**Example**  
```js
const data = {
  person: {
    name: {
      first: 'John',
      last: 'Doe'
    },
    age: 30,
    position: 'Frontend Developer'
  }
};

interpolate('Hello, {{person.name.first}} {{person.name.last}}!', data);
// => 'Hello, John Doe!'

interpolate('Age: {{person.age}}', data);
// => 'Age: 30'

interpolate('Position: {{ person.position }}', data);
// => 'Position: Frontend Developer'

interpolate('Hello, {{person.nickname}}!', data);
// => 'Hello, {{person.nickname}}!'

interpolate('Hello, {{name}}!');
// => 'Hello, {{name}}!'
```
