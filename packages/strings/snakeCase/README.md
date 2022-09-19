<a name="snakeCase"></a>

## snakeCase(subjectString) ⇒ <code>String</code>
Converts a string to [snake case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
Combines words by replacing each space with an underscore (_).

**Returns**: <code>String</code> - Returns the snake cased string.  
**Throws**:

- <code>TypeError</code> Throws if `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to convert. |

**Example**  
```js
snakeCase('the quick brown fox jumps over the lazy dog');
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'

snakeCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'

snakeCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'

snakeCase('theQuickBrownFoxJumpsOverTheLazyDog');
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'

snakeCase('TheQuickBrownFoxJumpsOverTheLazyDog');
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'

snakeCase('The Quick Brown Fox Jumps Over The Lazy Dog');
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'

snakeCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'

snakeCase('theQUICKBrownFoxJumpsOverTheLazyDog');
// => 'the_q_u_i_c_k_brown_fox_jumps_over_the_lazy_dog'

snakeCase('thequickbrownfoxjumpsoverthelazydog');
// => 'thequickbrownfoxjumpsoverthelazydog'

snakeCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ');
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
```
