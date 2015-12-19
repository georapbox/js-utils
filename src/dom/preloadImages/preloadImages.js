/**
 * Asynchronsouly load images to browser so that can be cached.
 * Can be called as many times as we want and each time, it will just add more images to browser's cache.
 * @param {array} images An array of strings that represent the path of the images to be cached.
 * @param {function} [callback] A function to be executed if all images are successfully loaded.
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
