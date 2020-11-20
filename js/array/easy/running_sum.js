/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }
    for(let i=1; i<nums.length; i++){
       nums[i] = nums[i]+nums[i-1];
    }
    return nums;
};



// Test Case
//nums = [1,1,1,1,1]; // [1,2,3,4,5]
nums = [3,1,2,10,1]; //  [3,4,6,16,17]
console.log(runningSum(nums))