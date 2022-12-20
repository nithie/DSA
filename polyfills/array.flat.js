if (!Array.prototype.flat) {
    Array.prototype.flat = function() {
        if (depth == undefined) {
            depth = 1;
        }
        function flatten(arr, depth) {
            if (depth < 1) {
                return arr.slice(1);
            } 
            arr.reduce(function(acc, val) {
                return acc.concat(Array.isArray(val) ? flatten(val, 1) : val);
            }, []);

        }
        return flatten(this, depth);
    }
}

console.log([1, [2, 11, 98, 22], [21, [33, 11, 12]], ].flat(2));