// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(nums[i]== nums[j] && i<j){
                result++;
            }
        }
    }
    return result;
};

let nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));

// Map solution

var numIdenticalPairs2 = function(nums) {
    let m = new Map(), res = 0;
    for (let num of nums) m.set(num, m.get(num)+1 || 1);
    let arr = Array.from(m.values()).filter(val => val > 1);
    for (let freq of arr) res += freq*(freq-1)/2;
    return res;
    // This is a combination problem.
    // We always need to choose two numbers from n numbers.
    // n choose r (nCr) => n! / ((n-r)!*r!)
};

function numIdenticalPairs2(nums) {
    return nums.reduce((acc, curr, i) => {
        nums.slice(++i).forEach(v => {
            if (curr === v) acc++;
        });
        return acc;
    }, 0);
};