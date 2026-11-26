class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = new Map();

        for(let i = 0; i < nums.length; i++){
            let val = target - nums[i];
            if(hashMap.has(val)){
                return [hashMap.get(val), i];
            }
            hashMap.set(nums[i], i);
        }
    }
}
