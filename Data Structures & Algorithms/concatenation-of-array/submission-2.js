class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let len = nums.length;
        let result = new Array(len * 2);
        for(let i = 0; i < len; i++){
            result[i] = nums[i];
            result[i + len] = nums[i];
        }
        return result;
    }
}
