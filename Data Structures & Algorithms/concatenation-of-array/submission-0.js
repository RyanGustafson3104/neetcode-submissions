class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let result = [...nums];
        let numsLen = nums.length;

        for(let i = 0; i < numsLen; i++){
            result.push(nums[i]);
        }

        return result;
    }
}
