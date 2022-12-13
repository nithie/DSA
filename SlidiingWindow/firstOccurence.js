var strStr = function(haystack, needle) {
    let index = 0 ;
    while (index <= (haystack.length - needle.length)) {
        if (haystack.substr(index, needle.length) == needle){
            return index;
        }
        index++;
    }
    return -1;
};

console.log(strStr("hello", "ll"));