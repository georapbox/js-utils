##replaceAll
>Returns a new string with all occurrences of subStr replaced with replaceStr.

####Syntax
```js
replaceAll(str, subStr, replaceStr [, caseInsensitive])
```

- <code>str</code>

The initial string.

- <code>subStr</code>

The substring to replace.

- <code>replaceStr</code>

The substring to replace with.

- <code>caseInsensitive (Optional)</code>

If true, the lookup is case insensitive. Default is undefined (falsey).

####Example
```js
var str = 'Lorem ispum 5 dolor sit amet.';

replaceAll(str, ' ', '_')); // 'Lorem_ispum_5_dolor_sit_amet'
replaceAll(str, '', '-')); // 'L-o-r-e-m- -i-s-p-u-m- -5- -d-o-l-o-r- -s-i-t- -a-m-e-t-.'
replaceAll(str, 5, 15)); // 'Lorem ispum 15 dolor sit amet.'
replaceAll(str, 'Lorem', '***')); // '*** ispum 5 dolor sit amet.'
replaceAll(str, 'LOREM', '_lorem_', true)); // '_lorem_ ispum 5 dolor sit amet.'
```