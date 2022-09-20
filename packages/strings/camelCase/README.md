<a name="camelCase"></a>

## camelCase(subjectString) ⇒ <code>String</code>
Converts a string to [camel case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
Combines words by capitalizing all words following the first word and removing spaces.

**Returns**: <code>String</code> - Returns the camel cased string.  
**Throws**:

- <code>TypeError</code> Throws if `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to convert. |

**Example**  
```js
camelCase('the quick brown fox jumps over the lazy dog');
// => 'theQuickBrownFoxJumpsOverTheLazyDog'

camelCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
// => 'theQuickBrownFoxJumpsOverTheLazyDog'

camelCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
// => 'theQuickBrownFoxJumpsOverTheLazyDog'

camelCase('thequickbrownfoxjumpsoverthelazydog');
// => 'thequickbrownfoxjumpsoverthelazydog'

camelCase('theQuickBrownFoxJumpsOverTheLazyDog');
// => 'theQuickBrownFoxJumpsOverTheLazyDog'

camelCase('TheQuickBrownFoxJumpsOverTheLazyDog');
// => 'theQuickBrownFoxJumpsOverTheLazyDog'

camelCase('The Quick Brown Fox Jumps Over The Lazy Dog');
// => 'theQuickBrownFoxJumpsOverTheLazyDog'

camelCase('theQUICKBrownFoxJumpsOverTheLazyDog');
// => 'theQUICKBrownFoxJumpsOverTheLazyDog'

camelCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
// => 'theQuickBrownFoxJumpsOverTheLazyDog'

camelCase(' () @#$ @# @the quick brown fox jumps over the lazy dog  #!#$% <> ');
// => 'theQuickBrownFoxJumpsOverTheLazyDog'
```
