// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let found = 0;
    for (let i=0; i< nums.length; i++){
        if(nums[i] === k || ( (nums[i] + nums[i+1]) === k) ){
            found++;
        }
    }
    return found;
};

let nums = [1,1,1], k = 2
console.log(subarraySum(nums, k))