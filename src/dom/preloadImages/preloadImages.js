/**
 * Asynchronsouly load images to browser so that can be cached.
 * Can be called as many times as we want and each time, it will just add more images to browser's cache.
 *
 * @category DOM
 * @param {Array} images An array of strings that represent the path of the images to be cached.
 * @param {function} [callback] A function to be executed if all images are successfully loaded.
 * @example
 *
 * preloadImages([
 *   'http://eskipaper.com/images/fantasy-wallpapers-1.jpg',
 *   'http://eskipaper.com/images/fantasy-wallpapers-2.',
 *   'http://7-themes.com/data_images/out/32/6878038-fantasy-wallpaper.jpg',
 *   'http://www.pageresource.com/wallpapers/wallpaper/fantasy-wallpaper-wallpapers.jpg',
 *   'http://www.magic4walls.com/wp-content/uploads/2013/12/fantasy-wallpaper-castle-wallpapers-array-wallwuzz-hd-wallpaper-4802.jpg'
 * ], function (images) {
 *   console.log('All ' + images.length + ' images have been successfully loaded.');
 * });
 */
function preloadImages(images, callback) {
    'use strict';

    if (!preloadImages.list) {
        preloadImages.list = [];
    }

    var list = preloadImages.list,
        i = 0,
        len = images.length,
        img;

    var onloadSuccess = function (image) {
        var index;
        image.onload = function () {
            index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
                if (list.length === 0) {
                    callback && callback(images);
                }
            }
        };
    };

    for (i; i < len; i += 1) {
        img = new Image();
        onloadSuccess(img);
        list.push(img);
        img.src = images[i];
    }
}
