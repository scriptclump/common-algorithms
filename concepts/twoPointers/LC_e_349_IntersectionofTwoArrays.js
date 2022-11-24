// 349. Intersection of Two Arrays
// Easy


// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique 
// and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
// Accepted
// 772,880
// Submissions
// 1,098,797

/**
 * Sliding Window Approach
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    
};

/**
 * Brute force Approach
 * @param {*} nums1 
 * @param {*} nums2 
 */
var intersectionBf = function(nums1, nums2) {
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j] && res.includes(nums1[i]) === false ){
                res.push(nums1[i]);
            }
        }
    }
    return res;
};

// Test Cases:
// const nums1 = [1,2,2,1], nums2 = [2,2]  // [2]
//  const nums1 = [4,9,5], nums2 = [9,4,9,8,4] //  [9,4] or [4,9]

console.log("Res", intersectionBf(nums1, nums2))