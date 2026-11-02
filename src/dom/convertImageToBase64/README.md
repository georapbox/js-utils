<a name="convertImageToBase64"></a>

## convertImageToBase64 ⇒ <code>Promise.&lt;string&gt;</code>
Fetches an image and converts its content to a Base64-encoded Data URI.

**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves to the Base64-encoded Data URI.

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the image to convert. |

**Example**
```js
const dataUri = await convertImageToBase64('image.png');
// => 'data:image/png;base64,...'
```
