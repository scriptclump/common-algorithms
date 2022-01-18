/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    left =0;
    right = nums.length -1;
    while(left <= right){
        mid = Math.floor((left+right)/2);
        if (nums[mid] == target){
            if (nums[mid] == 0 || nums[mid-1] != target ){
                return mid
            }
            right = mid -1
        }else if(nums[mid] > target ){
            right = mid -1
        }else{
            left = mid +1
        }
    }
};

nums = [10,11,11,11,14,15]; // [3,4]
target = 8;


// nums = [5,7,7,8,8,10]; // [3,4]
// target = 8;

// nums = [5,7,7,8,8,10]; // [-1,-1]
// target = 6

// nums = []; // [-1,-1]
// target = 0

console.log(searchRange(nums, target));