Array.prototype.myflat = function(depth) {
        if (depth == undefined) {
            depth = 1;
        }
        function flatten(arr, depth) {
            if (depth < 1) {
                return arr;
            } 
            return arr.reduce(function(acc, val) {
                return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
            }, []);

        }
        return flatten(this, depth);
}

console.log([1, 2, 3, 4,5, [2, 11, 98, 22], [21, [33, 11, 12, [2, [3, [4], [5]]]]], ].myflat(5));

Array.prototype.myOwnFlat = function(depth) {
    if (depth === undefined) {
        depth = 1;
    }
    function flatten(arr, depth) {
        if (depth < 0) {
            return arr;
        }
        return arr.reduce((prev, next) => {
            return prev.concat(Array.isArray(next) ? flatten(next, depth - 1) : next)
        }, []);
    }
    return flatten(this, depth);
}


console.log([1, 2, 3, 4,5, [2, 11, 98, 22], [21, [33, 11, 12, [2, [3, [4], [5]]]]], ].myOwnFlat(1));
