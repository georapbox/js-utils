'use strict';

/**
 * Load images to browser asynchronously so that can be cached.
 *
 * @param {Array} images An array of strings that represent the path of the images to be cached.
 * @param {function} [successCallback] A function to be executed after an image is successfully loaded.
 * @param {function} [errorCallback] A function to be executed after an image is not loaded.
 * @param {function} [alwaysCallback] A function to be always executed regardless an image is loaded or failed to load.
 * @throws {TypeError} If `images` is not array.
 * @returns {undefined}
 * @example
 *
 * const images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'];
 *
 * function success(data) {
 *   console.log(data.currentImage.src, 'loaded');
 * }
 *
 * function fail(data) {
 *   console.error(data.error);
 *   console.log(data.currentImage.src, 'failed');
 * }
 *
 * function always(data) {
 *   // Do something if all images are loaded successfully.
 *   if (data.remainingImages.length === 0) {
 *     console.log('All ' + data.imagesPaths.length + ' were successfully loaded.');
 *   }
 * }
 *
 * preloadImages(images, success, fail, always);
 */
const preloadImages = (images, successCallback, errorCallback, alwaysCallback) => {
  const list = [];

  if (!Array.isArray(images)) {
    throw new TypeError('Expected an array for first argument');
  }

  const onloadSuccess = image => {
    image.onload = function imagesLoadSuccess(event) {
      const index = list.indexOf(this);

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
  };

  const onLoadError = image => {
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
  };

  for (let i = 0; i < images.length; i += 1) {
    const img = new Image();
    onloadSuccess(img);
    onLoadError(img);
    list.push(img);
    img.src = images[i];
  }
};

module.exports = preloadImages;
