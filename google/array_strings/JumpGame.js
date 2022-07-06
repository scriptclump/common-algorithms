// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let reach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > reach)
            return false;
        reach = Math.max(reach, i + nums[i]);
       
    }
    return true
};


// Naming:
// We call a position in the array a "good index" if starting at that position, we can reach the last index. Otherwise, that index is called a "bad index". The problem then reduces to whether or not index 0 is a "good index".
// Solution:
// This is a dynamic programming[1] question. Usually, solving and fully understanding a dynamic programming problem is a 4 step process:

// Start with the recursive backtracking solution
// Optimize by using a memoization table (top-down[2] dynamic programming)
// Remove the need for recursion (bottom-up dynamic programming)
// Apply final tricks to reduce the time / memory complexity
// All solutions presented below produce the correct result, but they differ in run time and memory requirements.


// Approach 1: Backtracking
// This is the inefficient solution where we try every single jump pattern that takes us from the first position to the last. We start from the first position and jump to every index that is reachable. We repeat the process until last index is reached. When stuck, backtrack.


// public class Solution {
//     public boolean canJumpFromPosition(int position, int[] nums) {
//         if (position == nums.length - 1) {
//             return true;
//         }

//         int furthestJump = Math.min(position + nums[position], nums.length - 1);
//         for (int nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
//             if (canJumpFromPosition(nextPosition, nums)) {
//                 return true;
//             }
//         }

//         return false;
//     }

//     public boolean canJump(int[] nums) {
//         return canJumpFromPosition(0, nums);
//     }
// }

// One quick optimization we can do for the code above is to check the nextPosition from right to left. The theoretical worst case performance is the same, but in practice, for silly examples, the code might run faster. Intuitively, this means we always try to make the biggest jump such that we reach the end as soon as possible

// The change required is:
// // Old
// for (int nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++)
// // New
// for (int nextPosition = furthestJump; nextPosition > position; nextPosition--)


// Approach 2: Dynamic Programming Top-down
// Top-down Dynamic Programming can be thought of as optimized backtracking. It relies on the observation that once we determine that a certain index is good / bad, this result will never change. This means that we can store the result and not need to recompute it every time.

// Therefore, for each position in the array, we remember whether the index is good or bad. Let's call this array memo and let its values be either one of: GOOD, BAD, UNKNOWN. This technique is called memoization[3].

// An example of a memoization table for input array nums = [2, 4, 2, 1, 0, 2, 0] can be seen in the diagram below. We write G for a GOOD position and B for a BAD one. We can see that we cannot start from indices 2, 3 or 4 and eventually reach last index (6), but we can do that from indices 0, 1, 5 and (trivially) 6.