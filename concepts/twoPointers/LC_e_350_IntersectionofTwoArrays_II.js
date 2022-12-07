// 350. Intersection of Two Arrays II
// Easy

// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result 
// in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
 

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
// Accepted
// 952,803
// Submissions
// 1,713,154


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersectHashMap = function(nums1, nums2) {
    let res = [], m = new Map();
    
    // Setup the map for compare from first array
    for (let i = 0; i < nums1.length; i++) {
        if(!m.get(nums1[i])){
            m.set(nums1[i], 1)
        } else{
            m.set(nums1[i],  m.get(nums1[i]) + 1) 
        }        
    }
    // Check the values in res
    for (let j = 0; j < nums2.length; j++) {
        if(m.get(nums2[j]) > 0 ){
            m.set( nums2[j], m.get(nums2[j]) - 1);
            res.push(nums2[j])
        }
        
    }

    return res;

};

let nums1 = [1,2,2,1], nums2 = [2,2]; // 
// let nums1 = [4,9,5], nums2 = [9,4,9,8,4] // [4,9]
console.log(intersectHashMap(nums1, nums2))