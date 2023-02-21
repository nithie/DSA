var countAndSay = function(n) {
    const map = new Map();
    n = n.toString();
    for(let i = 0; i < n.length; i++) {
        if (map.get(n[i])){
            map.set(n[i], map.get(n[i]) + 1)
        } else {
            map.set(n[i], 1);
        }
    }
    var result = "";
    map.forEach((value, key) => {
        result += `${value}${key}`
    });
    return result;
};

console.log(countAndSay("3322251"));