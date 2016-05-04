### [DOM](../) > preloadImages

```js
preloadImages(images [, callback])
```

Asynchronously load images to browser so that can be cached.
Can be called as many times as we want and each time, it will just add more images to browser's cache.

#### Arguments

- `images` _(array)_: An array of strings that represent the path of the images to be cached.

- [callback] _(function)_: Optional. A function to be executed if all images are successfully loaded.

#### Example
```js
preloadImages([
    'http://eskipaper.com/images/fantasy-wallpapers-1.jpg',
    'http://eskipaper.com/images/fantasy-wallpapers-2.',
    'http://7-themes.com/data_images/out/32/6878038-fantasy-wallpaper.jpg',
    'http://www.pageresource.com/wallpapers/wallpaper/fantasy-wallpaper-wallpapers.jpg',
    'http://www.magic4walls.com/wp-content/uploads/2013/12/fantasy-wallpaper-castle-wallpapers-array-wallwuzz-hd-wallpaper-4802.jpg'
], function (images) {
    console.log('All ' + images.length + ' images have been successfully loaded.');
});
```
