// 209. Minimum Size Subarray Sum
// Medium

// Given an array of positive integers nums and a positive integer target, 
// return the minimal length of a subarray whose sum is greater than or equal to target. 
// If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 
// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time 
// complexity is O(n log(n)).

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/*
We are given only positive integers so as the window size of subarray gets bigger,
the subarray sum gets bigger.

We keep two pointers: `start` and `end`, which indicate the ends of subarray.
We start expanding `end` (add element to sum).
While subarray sum is greater than or equal target, we compare the current window size and 
that in global variable and store the smaller size and advance `start` pointer and keep
updating the minimum size.
We repeat this until the end of array.
*/
var minSubArrayLen = function(target, nums) {
    let start = 0, sum = 0, minSize = Infinity;
    for (let end = 0; end < nums.length; end++) {
        // Add current element
        sum += nums[end];
        
        // Get the minimum window size while subarray 
        // sum is greater than or equal to target
        while (sum >= target) {
            minSize = Math.min(minSize, end - start + 1);
            sum -= nums[start++];
        }
    }
    return minSize === Infinity ? 0 : minSize;
    // T.C: O(N)
    // S.C: O(1)
};
const target = 7;
const nums = [2,3,1,2,4,3];
console.log("answer=",minSubArrayLen(target, nums))