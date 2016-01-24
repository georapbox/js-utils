/**
 * Converts an image's content to Data URI scheme.
 * @param {String} url The path of the image to be converted.
 * @return {Object} A promise that when resolved, returns the Base64 string.
 */
function convertImageToBase64(url) {
    'use strict';

    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        image = new Image();

    image.src = url;

    return new Promise(function (resolve, reject) {
        image.onload = resolve;
        image.onerror = reject;
    }).then(function () {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
        return canvas.toDataURL();
    });
}
