/**
 * Fetches an image and converts its content to a Base64-encoded Data URI.
 *
 * @param {string} url The URL of the image to convert.
 * @returns {Promise<string>} A promise that resolves to the Base64-encoded Data URI.
 * @example
 *
 * const dataUri = await convertImageToBase64('image.png');
 * // => 'data:image/png;base64,...'
 */
export const convertImageToBase64 = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status}`);
  }

  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);

    reader.readAsDataURL(blob);
  });
};
