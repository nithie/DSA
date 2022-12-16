/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    var seen = {}
    for (let i =0 ; i< nums.length; i++) {
        if(!seen[nums[i]])
            seen[nums[i]] = 1;
        else 
            seen[nums[i]] += 1;
    }
    for (let key in seen) {
        if (seen[key] == 1)
            return key;
    }
};

console.log(singleNumber([4,1,2,1,2]));