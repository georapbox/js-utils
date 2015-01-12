function findLastIndex(array, callback) {
    var length = array ? array.length : 0;

    while (length--) {
        if (callback(array[length], length, array)) {
            return length;
        }
    }

    return -1;
}