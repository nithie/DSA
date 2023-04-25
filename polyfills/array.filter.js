Array.prototype.myfilter = function(callback) {
    if (typeof callback !== 'function') {
        throw Error('Callback should be of type function');
    }
    var arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(undefined, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}


Array.prototype.myOwnFilter = function(callback) {
    if (typeof callback !== "function") {
        throw Error("Callback should be of type function")
    }
    var result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(this, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return result;

}