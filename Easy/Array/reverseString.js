var reverseString = function(s) {
    var input = [...s];
    for (let i = 0 ; i < input.length ; i++ ) {
        s[input.length - 1 - i] = input[i]; 
    }
    return s;
};

console.log(reverseString(["h","e","l","k","o"]));