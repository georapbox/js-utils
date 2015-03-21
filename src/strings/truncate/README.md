###[Strings](../) > truncate

```js
truncate(string, characterCount [, delimiter])
```

>Truncates a string based on character count.

- <code>string {string}</code>

The string to truncate.

- <code>characterCount {number}</code>

The number of characters the truncated string will contain. If ommitted or falsey, the default string is returned.

- <code>[delimiter] {string}</code>

The delimiter to add at the end of the truncated string. Default value is "...".

####Example
```js
var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptas tempora nihil commodi laborum sit eum atque iusto temporibus, odit natus odio accusantium id, labore, possimus laboriosam. Eos, ducimus, blanditiis.';

truncate(str, 50);
// => "Lorem ipsum dolor sit amet, consectetur adipisicin..."

truncate(str, 30, '---');
// => "Lorem ipsum dolor sit amet, co---"
```