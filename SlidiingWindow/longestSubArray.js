/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let seen = {};
    let longest = 0;
    let start = 0;
   
    for(let i =0; i < s.length; i++) {
        let char = s[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
       longest = Math.max(longest, i - start + 1);
       // store the index of the next char so as to not double count
       seen[char] = i + 1;
    }
    return longest;
   };

   console.log(lengthOfLongestSubstring("abcabcbb"));


   /// Traverse through string, keep track of character position in a obj
   /// keep track start index of substring
   /// If element is already seen before after the start index , move the start to current position
   /// else compute running substr length subtracting loop pos with substr start index