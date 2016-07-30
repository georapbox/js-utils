<a name="preloadImages"></a>

## preloadImages(images, [successCallback], [errorCallback], [alwaysCallback])
Load images to browser asynchronously so that can be cached.

**Kind**: global function  
**Category**: DOM  
**Throws**:

- <code>TypeError</code> If `images` is not array.


| Param | Type | Description |
| --- | --- | --- |
| images | <code>Array</code> | An array of strings that represent the path of the images to be cached. |
| [successCallback] | <code>function</code> | A function to be executed after an image is successfully loaded. |
| [errorCallback] | <code>function</code> | A function to be executed after an image is not loaded. |
| [alwaysCallback] | <code>function</code> | A function to be always executed regardless an image is loaded or failed to load. |

**Example**  
```js
preloadImages([
  'http://eskipaper.com/images/fantasy-wallpapers-1.jpg',
  'http://eskipaper.com/images/fantasy-wallpapers-2.',
  'http://7-themes.com/data_images/out/32/6878038-fantasy-wallpaper.jpg',
  'http://www.pageresource.com/wallpapers/wallpaper/fantasy-wallpaper-wallpapers.jpg',
  'http://www.magic4walls.com/wp-content/uploads/2013/12/fantasy-wallpaper-castle-wallpapers-array-wallwuzz-hd-wallpaper-4802.jpg'
], function success(data) {
  console.log(data.currentImage.src + ' -> loaded');
}, function fail(data) {
  console.error(data.error);
  console.log(data.currentImage.src + ' -> failed');
}, function always(data) {
  // Do something if all images are loaded successfully.
  if (data.remainingImages.length === 0) {
    console.log('All ' + data.imagesPaths.length + ' were successfully loaded.');
  }
});
```
