class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = new Map();
        let out = [];
        let index = 0;

        for(let i = 0; i < strs.length; i++){
            const curr = strs[i].split("").sort().join("");

            if(hashMap.has(curr)){
                out[hashMap.get(curr)].push(strs[i]);
            }
            else{
                hashMap.set(curr, index);
                out[index] = [strs[i]];
                index++;
            }
        }
        return out;
    }
}
