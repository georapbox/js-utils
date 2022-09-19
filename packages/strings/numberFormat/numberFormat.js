'use strict';

/**
 * Formats a number based on the number of decimal points,
 * the decimal separator and the thousands separator.
 * If a string is provided as the first argument, will try to convert it.
 *
 * @param {Number} nNumber The number to format.
 * @param {Number} [nDecimals=0] The number of decimal points the formatted number will have.
 * @param {String} [sDecimalSeparator='.'] The decimal separator character(s).
 * @param {String} [sThousandSeparator=','] The thousands separator character(s).
 * @returns {String} The formatted number as a string.
 * @example
 *
 * numberFormat(123456789.12345);
 * // => '123,456,789'
 *
 * numberFormat(123456789.12345, 3, '.', ',');
 * // => '123,456,789.123'
 *
 * numberFormat(123456789.12345, 3, ',', '.');
 * // => '123.456.789,123'
 */
const numberFormat = (nNumber, nDecimals, sDecimalSeparator, sThousandSeparator) => {
  if (typeof nNumber !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  if (Number.isNaN(nNumber)) {
    return '';
  }

  nNumber = nNumber.toFixed(~~nDecimals);
  sThousandSeparator = typeof sThousandSeparator === 'string' ? sThousandSeparator : ',';

  const parts = nNumber.split('.');
  const integerPart = parts[0];
  const fractionalPart = parts[1] ? (sDecimalSeparator || '.') + parts[1] : '';

  return integerPart.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + sThousandSeparator) + fractionalPart;
};

module.exports = numberFormat;
