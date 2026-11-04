<a name="kebabCase"></a>

## kebabCase(subjectString) ⇒ <code>String</code>
Converts a string to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
Combines words of a string by replacing each space with a dash (-).

**Returns**: <code>String</code> - Returns the kebab cased string.  
**Throws**:

- <code>TypeError</code> Throws if `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to convert. |

**Example**  
```js
kebabCase('the quick brown fox jumps over the lazy dog');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'

kebabCase('   the quick brown fox jumps over the lazy dog   ');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'

kebabCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'

kebabCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'

kebabCase('theQuickBrownFoxJumpsOverTheLazyDog');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'

kebabCase('TheQuickBrownFoxJumpsOverTheLazyDog');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'

kebabCase('The Quick Brown Fox Jumps Over The Lazy Dog');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'

kebabCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'

kebabCase('theQUICKBrownFoxJumpsOverTheLazyDog');
// => 'the-q-u-i-c-k-brown-fox-jumps-over-the-lazy-dog'

kebabCase('thequickbrownfoxjumpsoverthelazydog');
// => 'thequickbrownfoxjumpsoverthelazydog'

kebabCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ');
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
```
