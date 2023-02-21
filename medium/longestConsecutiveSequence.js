/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if (nums.length < 2) return nums.length;
    nums = nums.sort(function(a, b) {
        return a - b;
    });        
    let count = 1;
    let max = 1;
    for(let i = 1; i < nums.length; i++) {   
        if ((nums[i - 1] - nums[i]) == 1){
            count++;
            max = Math.max(max, count);
        } else if (nums[i -1] == nums[i]){
            continue;
        }else {  
            count = 1;         
        }
    }
    return max;
};

const longestConsecutive2 = (nums) => {
    let maxLength = 0;
    let set = new Set(nums); //Intialize set with nums array
  
    for (let num of nums) {
      if (set.has(num - 1)) continue; // Not the start of a new consecutive list, so skip.
      let length = 1;
      while (set.has(num + length)) length++; // Build up the length as we find the next consecutive num
      maxLength = Math.max(length, maxLength); // Update max
    }
    return maxLength;
  };
  

console.log(longestConsecutive2([100,4,200,1,3,2]));