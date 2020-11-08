<a name="supplant"></a>

## supplant(subjectString, [data]) ⇒ <code>String</code>
Does variable substitution on a string.
It scans through the string looking for expressions enclosed in {{ }} braces.
If an expression is found, use it as a key on the object,
and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.

**Returns**: <code>String</code> - The result string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The initial string to substitude its expressions. |
| [data] | <code>Object</code> | A plain object that acts as our model. If `data` omitted, returns the original string. |

**Example**  
```js
var str = '' +
  '<p>My name is {{person.fName}} {{person.lName}} and my job is {{person.position}}.</p>' +
   '<p>' +
     'My hobbies are:' +
     '<ul>' +
       '<li>{{hobbies.0}}</li>' +
       '<li>{{hobbies.1}}</li>' +
       '<li>{{hobbies.2}}</li>' +
     '</ul>' +
   '</p>';

var data = {
  person: {
    fName: 'John',
    lName: 'Doe',
    position: 'Frontend Developer'
  },
  hobbies: ['coding', 'music', 'gaming']
};

supplant(str, data);
// -> My name is John Doe and my job is Frontend Developer.
// -> My hobbies are:
// -> - coding
// -> - music
// -> - gaming
```
