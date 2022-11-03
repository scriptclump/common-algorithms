// Given an array consisting of n integers, find the contiguous subarray of given length k 
// that has the maximum average value. And you need to output the maximum average value.

// Example:

// Input: [1, 12, -5, -6, 50, 3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


// Concept: we will subtract the element going out of the window and add the element now being
//  included in the sliding window.


function findMaxAverage(arr, k) {
    let maxAverage, sum = 0;
    if(arr.length < k){
        return -1;
    }
    // Find out initital max average
    for(let i=0; i<k; i++){
        sum += arr[i];
        maxAverage = sum/k;
    }

    for(let i=k; i<arr.length; i++){
        sum += arr[i] - arr[i -k];
        maxAverageCurrent = sum/k;

        if(maxAverage < maxAverageCurrent){
            maxAverage = maxAverageCurrent;
        }
    }
    return maxAverage;

}

const arr = [1, 12, -5, -6, 50, 3];
const k = 4;

console.log(findMaxAverage(arr, k))