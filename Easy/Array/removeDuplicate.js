var removeDuplicates = function(nums) {
    var seen = {}
    for(let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            nums.splice(i, 1);
            i--;
        } else {
            seen[nums[i]] = true
        }
    }
    return nums;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));