// Given an unsorted integer array, find a pair with the given sum in it.

// Find a pair with the given sum in an array
// Given an unsorted integer array, find a pair with the given sum in it.

// For example,

// Input:
 
// nums = [8, 7, 2, 5, 3, 1]
// target = 10
 
// Output:
 
// Pair found (8, 2)
// or
// Pair found (7, 3)
 
 
// Input:
 
// nums = [5, 2, 6, 8, 1, 9]
// target = 12
 
// Output: Pair not found


// Brute force approach
function pairSumBf(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return -1;
}

// Hash Approach
function pairSumHash(nums, target){
    hm = {}
    hm.push(nums);
    console.log("test--->", hm);
}

function pairSumTwoPointer(nums, target){
    let sortedArray = nums.sort(function(a, b){return a - b});
    let left = 0;
    let right = nums.length -1;
    while(left < right){
        if( (sortedArray[left] + sortedArray[right]) == target){
            return [left, right]
        } else if (target < (sortedArray[left] + sortedArray[right]) ) {
            left++
        }else{
            right++
        }
    }
    return -1;
}



nums = [5, 2, 6, 8, 1, 9]
target = 12
// console.log(pairSumBf(nums, target))
// console.log(pairSumHash(nums, target))
console.log(pairSumTwoPointer(nums, target))