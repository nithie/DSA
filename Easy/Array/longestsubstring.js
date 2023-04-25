function longestString (s) {
    if (s.length === 0) {
        return 0;
    }
    let longest = 0;
    let i = 0;
    let j = 0;
    let seen  = {}
    while(i<s.length && j < s.length) {
        if (!seen[s[j]]) {
            seen[s[j]] = true;
            longest = Math.max(longest, j - i + 1);
            j++;
        } else {
            j++;
            i = j;
        }
    }
    return longest;
}

console.log(longestString('abcadefa'));