/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
var isBadVersion1  = function(version) {
    if (version >= 4 ) return true;
    return false;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0; let end = n;
        while(start < end) {
            if (end - start == 1) return end;
            let mid = Math.floor((start + end ) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid;
            }            
        }
        return end;
    };
};

console.log(solution(isBadVersion1)(5));