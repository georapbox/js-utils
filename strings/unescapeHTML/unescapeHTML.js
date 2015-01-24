/**
 * Unescapes a HTML string.
 * @param   {String} str The HTML string to unescape.
 * @returns {String} The unescaped string.
 */
function unescapeHTML(str) {
    var element = document.createElement('div'),
        nodesLength,
        result = '';

    element.innerHTML = str;
    nodesLength = element.childNodes.length;

    // Chrome splits innerHTML into many child nodes, each one at most 65536.
    // Whereas FF creates just one single huge child node.
    while (nodesLength--) {
        result = result + element.childNodes[nodesLength].nodeValue;
    }

    element = null;
    return result;
}