var findFirstPosition = (nums, target) => {
    left = 0;
    right = nums.length -1;
    while(left <= right){
        mid = Math.floor((left+right)/2);
        if(nums[mid] == target){            
            if( (mid -1 >= 0 && nums[mid -1] != target) || (mid == 0) ){
                return mid;
            }
            right = mid -1;
        } else if(nums[mid] < target){
            left = mid +1;
        } else{
            right = mid -1;
        }
    }
    return -1;
}

var findLastPosition = (nums, target) => {
    left = 0;
    right = nums.length -1;
    while(left <= right){
        mid = Math.floor((left+right)/2);
        if(nums[mid] == target){            
            if( (mid +1 <= nums.length -1 && nums[mid +1] != target) || (mid == nums.length -1) ){
                return mid;
            }
            right = mid +1;
        } else if(nums[mid] < target){
            left = mid +1;
        } else{
            right = mid -1;
        }
    }
    return -1;
}

var findFirstLastPosition = (nums, target) => {
    first = findFirstPosition(nums, target);
    last = findLastPosition(nums, target);
    return [first,last];
}



nums = [5,7,7,8,8,10];
target = 6;
console.log(findFirstLastPosition(nums, target));



// Test case
// nums = [5,7,7,8,8,10] target = 8  || Output [3,4] 
// nums = [5,7,7,8,8,10], target = 6 || Output: [-1,-1]
// Input: nums = [], target = 0      || Output: [-1,-1]