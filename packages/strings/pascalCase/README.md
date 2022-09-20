<a name="pascalCase"></a>

## pascalCase(subjectString) ⇒ <code>String</code>
Converts a string to [pascal case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
Combines words by capitalizing all words (even the first word) and removing spaces.

**Returns**: <code>String</code> - Returns the pascal cased string.  
**Throws**:

- <code>TypeError</code> Throws if `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to convert. |

**Example**  
```js
pascalCase('the quick brown fox jumps over the lazy dog');
// => 'TheQuickBrownFoxJumpsOverTheLazyDog'

pascalCase('The Quick Brown Fox Jumps Over The Lazy Dog');
// => 'TheQuickBrownFoxJumpsOverTheLazyDog'

pascalCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
// => 'TheQuickBrownFoxJumpsOverTheLazyDog'

pascalCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
// => 'TheQuickBrownFoxJumpsOverTheLazyDog'

pascalCase('TheQuickBrownFoxJumpsOverTheLazyDog');
// => 'TheQuickBrownFoxJumpsOverTheLazyDog'

pascalCase('thequickbrownfoxjumpsoverthelazydog');
// => 'Thequickbrownfoxjumpsoverthelazydog'

pascalCase('theQUICKBrownFoxJumpsOverTheLazyDog');
// => 'TheQUICKBrownFoxJumpsOverTheLazyDog'

pascalCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
// => 'TheQuickBrownFoxJumpsOverTheLazyDog'

pascalCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ');
// => 'TheQuickBrownFoxJumpsOverTheLazyDog'
```
