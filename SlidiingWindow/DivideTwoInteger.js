/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    
    var index = 0;
    var sum = 0;
    var temp1 = Math.abs(dividend);
    var temp2 = Math.abs(divisor);
    while((sum + temp2) <= temp1) {
        sum += temp2;
        index++;
    }
    var res = (divisor < 0 || dividend < 10) ? (index * -1) : index;
    if (res > 2147483648) return 2147483648;
    if (res < -2147483648) return 2147483648;
    return res;
};

console.log(divide(10,3));