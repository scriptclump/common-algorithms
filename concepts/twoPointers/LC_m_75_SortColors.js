// 75. Sort Colors
// Medium

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of 
// the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

// Accepted
// 1,252,815
// Submissions
// 2,183,904

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let left =0, right = nums.length -1;
    while (left <= right){
        if(nums[left] < nums[right]){
            left++;
        }else{
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            right--;
        }
    }
    return nums;
};



const nums = [2,0,2,1,1,0] // Output: [0,0,1,1,2,2]
// const nums = [2,0,1] // Output: [0,1,2]
 console.log("Res", sortColors(nums))