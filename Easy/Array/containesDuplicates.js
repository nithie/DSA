/// Given an integer array nums, return true if any value appears at least twice in
/// the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    var seen = {}
    for(let i = 0; i < nums.length; i++) {
        if (seen[nums[i]])
            return true;
        else 
            seen[nums[i]] = true;
    }
    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate2 = function(nums) {
    console.log(new Set(nums));
  return new Set(nums).length !== nums.length;
};

console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]));