class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let out = 0;

        for(let i = 1; i < prices.length; i++){
            out = Math.max(out, prices[i] - minBuy);
            minBuy = Math.min(minBuy, prices[i]);
        }

        return out;
    }
}
