function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getDigitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
}

function maxDigits(nums) {
    let max = 0;
    for(let i =0; i< nums.length; i++) {
        max = Math.max(max, getDigitCount(nums[i]));
    }
    return max;
}

function radixSort(nums) {
    const maxDidigits = maxDigits(nums);
    for(let i = 0; i < maxDidigits; i++) {
        let result = Array.from({length: 10}, () => []);        
        for(let j = 0; j < nums.length; j++) {
            const digitAtPos = getDigit(nums[j], i);
            (result[digitAtPos]).push(nums[j]);
        }
        nums = result.flat(1);
    }
    return nums;
}

console.log(radixSort([9876, 456, 23, 1 ,23424555, 898433]));