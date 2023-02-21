
var maxArea = function(height) {
    let i = 0; let j = height.length - 1;
    var max = 0;
    while(i < height.length){
        let j = height.length - 1;
        while (i < j) {
            let area = Math.min(height[i], height[j]) * (j - i);
            max = Math.max(max, area);        
            j--;
        }
        i++;
    }
    return max;
};

console.log(maxArea([2, 1]));