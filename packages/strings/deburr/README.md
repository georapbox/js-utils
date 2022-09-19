<a name="deburr"></a>

## deburr(subjectString) ⇒ <code>String</code>
Deburrs a string by converting latin-1 supplementary letters to basic latin letters and removing combining diacritical marks.

**Returns**: <code>String</code> - The deburred string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.

**Source**: https://lodash.com/docs#deburr  

| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to deburr. |

**Example**  
```js
const str = 'Maître Corbeau, sur un arbre perché,' +
  'Tenait en son bec un fromage.' +
  'Maître Renard, par l’odeur alléché,' +
  'Lui tint à peu près ce langage.';

deburr(str);
// => 'Maitre Corbeau, sur un arbre perche,Tenait en son bec un fromage.Maitre Renard, par l’odeur alleche,Lui tint a peu pres ce langage.'

deburr('déjà vu');
// => 'deja vu'
```
