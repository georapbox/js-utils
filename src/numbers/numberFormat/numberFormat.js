/**
 * Formats a number based on the number of decimal points,
 * the decimal seperator and the thousands seperator.
 * If a string is provided as the first argument, will try to convert it.
 * @param {Number} nNumber The number to format.
 * @param {Number} [nDecimals=0] The number of decimal points the formatted number will have.
 * @param {String} [sDecimalSeperator='.'] The decimal seperator character(s).
 * @param {String} [sThousandSeperator=','] The thousands seperator character(s).
 * @returns {String} The formatted number as a string.
 */
function numberFormat(nNumber, nDecimals, sDecimalSeperator, sThousandSeperator) {
    'use strict';

    if (nNumber !== nNumber || nNumber == null) {
        return nNumber || '';
    }

    nNumber = typeof nNumber === 'string' ? parseFloat(nNumber) : nNumber;
    nNumber = nNumber.toFixed(~~nDecimals);
    sThousandSeperator = typeof sThousandSeperator === 'string' ? sThousandSeperator : ',';

    var parts = nNumber.split('.'),
        integerPart = parts[0],
        fractionalPart = parts[1] ? (sDecimalSeperator || '.') + parts[1] : '';

    return integerPart.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + sThousandSeperator) + fractionalPart;
}
