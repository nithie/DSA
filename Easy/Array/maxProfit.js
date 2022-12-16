var maxProfit = function(prices) {
    let i = 0;
    let j = i + 1;
    let profit = 0;
    while (i < prices.length - 2) {
        let maxProfit = 0;
        j = i + 1;
    while (j < prices.length) {
        if (prices[i] < prices[j]) {
            maxProfit += prices[j] - prices[i];
        } else {
            j++;
        }        
    }
    profit =  Math.max(maxProfit, profit);
        i++;
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));