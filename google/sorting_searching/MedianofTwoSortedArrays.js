// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    
};

ans: https://www.youtube.com/watch?v=q6IEA26hvXc

var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
    const [m, n] = [nums1.length, nums2.length];
    const total = Math.floor((m + n + 1) / 2);
    let start = 0;
    let end = m;
    while (start <= end) {
      const part1 = Math.floor((start + end) / 2);
      const part2 = total - part1;
      const maxLeft1 = part1 === 0 ? -Infinity : nums1[part1 - 1];
      const minRight1 = part1 === m ? Infinity : nums1[part1];
      const maxLeft2 = part2 === 0 ? -Infinity : nums2[part2 - 1];
      const minRight2 = part2 === n ? Infinity : nums2[part2];
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
        if ((m + n) % 2 === 0) {
          return (
            (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
          );
        }
        return Math.max(maxLeft1, maxLeft2);
      }
      if (maxLeft1 > minRight2) {
        end = part1 - 1;
      } else {
        start = part1 + 1;
      }
    }
  };