function minSubArrayLen(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= result) {
            return 1;
        }
    }
    let len = 2;
    while(len < arr.length) {
        let sum = 0;
        let index = 0;

        for (var i = 0; i < len; i++) {
            sum += arr[i];
        }
        
        if (sum >= result) {
            return len;
        }
                
        while(index <= (arr.length - len)){
            sum = sum - arr[index] + arr[index + len];
            if (sum >= result){
                return len;
            }
            index++;
        }
        len++;
        
    }
    
    return 0;
}
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));