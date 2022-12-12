const merge = (arr1, arr2) => {
    const results = [];
    let i = 0;
    let j = 0;
    while((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] <= arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// const results = merge([1,2, 99,8, 2, 44,], [-1, 8, 12, 34]);

const mergeSort = (arr) => {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length /2);
    let left = mergeSort(arr.slice(0, mid));
    let right =  mergeSort(arr.slice(mid));
    return merge(left, right);
}
 
// console.log(mergeSort([24, 10, 76, 73, 2, 4]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var merge1 = (arr1, arr2) => {
    var result = [];
    var i = 0; 
    var j = 0;
    while((i < arr1.length) &&( j < arr2.length)) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    } 
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

var sortArray = function(nums) {
    if (nums.length === 1) return nums;
    var mid = Math.floor(nums.length /2);
    var left = sortArray(nums.slice(0, mid));
    var right = sortArray(nums.slice(mid));
    return merge1(left, right);
};

console.log(sortArray([5,2,3,1]));
