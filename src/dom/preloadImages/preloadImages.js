/**
 * Load images to browser asynchronously so that can be cached.
 *
 * @category DOM
 * @param {Array} images An array of strings that represent the path of the images to be cached.
 * @param {function} [successCallback] A function to be executed after an image is successfully loaded.
 * @param {function} [errorCallback] A function to be executed after an image is not loaded.
 * @param {function} [alwaysCallback] A function to be always executed regardless an image is loaded or failed to load.
 * @throws {TypeError} If `images` is not array.
 * @example
 *
 * preloadImages([
 *   'http://eskipaper.com/images/fantasy-wallpapers-1.jpg',
 *   'http://eskipaper.com/images/fantasy-wallpapers-2.',
 *   'http://7-themes.com/data_images/out/32/6878038-fantasy-wallpaper.jpg',
 *   'http://www.pageresource.com/wallpapers/wallpaper/fantasy-wallpaper-wallpapers.jpg',
 *   'http://www.magic4walls.com/wp-content/uploads/2013/12/fantasy-wallpaper-castle-wallpapers-array-wallwuzz-hd-wallpaper-4802.jpg'
 * ], function success(data) {
 *   console.log(data.currentImage.src + ' -> loaded');
 * }, function fail(data) {
 *   console.error(data.error);
 *   console.log(data.currentImage.src + ' -> failed');
 * }, function always(data) {
 *   // Do something if all images are loaded successfully.
 *   if (data.remainingImages.length === 0) {
 *     console.log('All ' + data.imagesPaths.length + ' were successfully loaded.');
 *   }
 * });
 */
function preloadImages(images, successCallback, errorCallback, alwaysCallback) {
    'use strict';

    var list, i, len, img;

    function onloadSuccess(image) {
        var index;

        image.onload = function imagesLoadSuccess(event) {
            index = list.indexOf(this);

            if (index !== -1) {
                list.splice(index, 1);
                successCallback && successCallback({
                    event: event,
                    remainingImages: list,
                    imagesPaths: images,
                    currentImage: image
                });
            }

            alwaysCallback && alwaysCallback({
                remainingImages: list,
                imagesPaths: images,
                currentImage: image
            });
        };
    }

    function onLoadError(image) {
        image.onerror = function imageLoadError(error) {
            errorCallback && errorCallback({
                error: error,
                remainingImages: list,
                imagesPaths: images,
                currentImage: image
            });

            alwaysCallback && alwaysCallback({
                remainingImages: list,
                imagesPaths: images,
                currentImage: image
            });
        };
    }

    if (Object.prototype.toString.call(images) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    list = [];
    i = 0;
    len = images.length;

    for (i; i < len; i += 1) {
        img = new Image();
        onloadSuccess(img);
        onLoadError(img);
        list.push(img);
        img.src = images[i];
    }
}
