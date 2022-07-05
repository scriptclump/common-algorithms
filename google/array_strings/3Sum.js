// 3Sum

// Solution
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
 

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var threeSum = function(nums) {
//     let arr=[]
//     if(nums.length<3) return [];
//     nums.sort((a,b)=>a-b);
//     for (var i=0;i<nums.length;i++) {
//         console.log('i',i)
//         if (nums[i]>0) break; //jump out the loop
//         if (nums[i]==nums[i-1]) continue; //should be i-1 rather than i+1
//         var left=i+1;
//         var right=nums.length-1;
//         while(left<right) {
//             if (nums[i]+nums[left]+nums[right]==0) {
//                 arr.push([nums[i],nums[left],nums[right]])
//                 //console.log(arr)
//                 while (nums[left]==nums[left+1]) left++;
//                 while (nums[right]==nums[right-1]) right--;// have to use while, because it may have more than one same number
//                 left++
//                 right--
//             }
//             else if(nums[i]+nums[left]+nums[right]<0) left++;
//             else if(nums[i]+nums[left]+nums[right]>0) right--;
//             //console.log(left,right)
//             //console.log(arr)
//         }
//     }
    
//     return arr;
// };

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
      // if nums[i] > 0, nums[i] + some two numbers in nums[i+1...end] can never equal 0
      if (nums[i] > 0) {
        break;
      }
      if (i === 0 || nums[i] !== nums[i - 1]) {
        twoSum(nums, i + 1, nums.length - 1, -nums[i], res);
      }
    }
    return res;
    // T.C: O(N^2)
    // S.C: O(N)
  };
  
  const twoSum = (nums, low, high, target, res) => {
    while (low < high) {
      let sum = nums[low] + nums[high];
      if (sum < target) {
        low++;
      } else if (sum > target) {
        high--;
      } else {
        res.push([-target, nums[low], nums[high]]);
        low++, high--;
        // to avoid duplicate two sum
        while (low < high && nums[low] === nums[low - 1]) {
          low++;
        }
      }
    }
  };