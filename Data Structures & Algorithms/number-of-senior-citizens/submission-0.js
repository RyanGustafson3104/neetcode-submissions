class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;

        for(let str of details){
            const age = Number(str.at(-4) + str.at(-3));
            if(age > 60){
                count += 1;
            }
        }

        return count;
    }
}
