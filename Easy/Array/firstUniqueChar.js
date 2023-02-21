var firstUniqChar = function(s) {
    var seen = new Map();
    for(char of s) {
        if (seen.has(char)) {
            seen.set(char, seen.get(char) + 1);
        } else {
            seen.set(char, 0);
        }
    }
    for(const [k, v] of seen) {
        if (v == 0) {
            return s.indexOf(k)
        }
    }
    return -1;
};

console.log(firstUniqChar("aab"));