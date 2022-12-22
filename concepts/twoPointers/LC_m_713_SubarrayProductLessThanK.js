// 713. Subarray Product Less Than K
// Medium


// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the
// product of all the elements in the subarray is strictly less than k.

 

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106
// Accepted
// 205,703
// Submissions
// 455,272

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
The key to this problem:

Subarray size (right - left + 1) gives the number of new sub-arrays generated upon adding a new element to the subarray.

For example, 
What is the total number of sub-arrays of [10,4,2,1]?

start: []
add 10: [10] -> +1 -> [10]
add 4: [10,4] -> +2 -> [4], [10,4]
add 2: [10,4,2] -> +3 -> [2], [4,2], [10,4,2]
add 1: [10,4,2,1] -> +4 -> [1], [2,1], [4,2,1], [10,4,2,1]

Answer: 10

To solve this question, we simply add an extra condition:
is the subarray product less than K?
*/
var numSubarrayProductLessThanK = function(nums, k) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    if (k <= 1) return 0;
    let start = 0, product = 1, count = 0;
    for (let end = 0; end < nums.length; end++) {
        product *= nums[end];
        // ensure subarray product is less than k
        while (product >= k && start <= end) {
            product /= nums[start++];
        }
        count += end - start + 1;
    }
    return count;
    // T.C: O(N)
    // S.C: O(1)
};
const nums = [10,5,2,6], k = 100; // 8
// const nums = [1,2,3], k = 0; // 0
console.log("Res", numSubarrayProductLessThanK(nums, k));