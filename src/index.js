exports.min = function min(array) {
    if (typeof array !== 'undefined' && array.length > 0)
        return Math.min.apply(null, array);
    return 0;
}

exports.max = function max(array) {
    if (typeof array !== 'undefined' && array.length > 0)
        return Math.max.apply(null, array);
    return 0;
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined' && array.length > 0)
        return array.reduce((sum, current) => sum + current) / array.length;
    return 0;
}