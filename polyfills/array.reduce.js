Array.prototype.myReduce = function(callback, initialValue) {
    if (this.length < 1) {
        if (initialValue === undefined) {
            throw Error('Empty array with no initial value is not supported');
        }
        return initialValue;
    }
    let accumulator = initialValue;
    for(let i = 0; i < this.length; i++) {
        if (accumulator) {
            accumulator = callback.call(undefined, accumulator, this[i], this)
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

const arr = [1, 2, 3, 4, 10];
console.log(arr.myReduce((total, elem) => total + elem, 1000));
console.log(arr.myReduce((prod, elem) => prod * elem, 10));
try {
    console.log([].myReduce((prod, elem) => prod * elem));
} catch (e) {
    console.log(e?.message)
}

Array.prototype.myOwnReduce = function(callback, initialValue) {
    if (initialValue === undefined && this.length === 0) {
        throw Error('Error')
    }
    if (this.length === 0) {
        return initialValue;
    }
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator) {
             accumulator = callback.call(this, accumulator, this[i], this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

const arr1 = [1, 2, 3, 4, 10];
console.log('aaa', arr1.myOwnReduce((total, elem) => total + elem, 1000));