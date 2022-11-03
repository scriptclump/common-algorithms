// Problem Statement:
// Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements 
// in the array.
function maxSum(arr, n, k) {
		let max = 0;
		let sum = 0;
		// find initial sum of first k elements
		for (let i = 0; i < k; i++) {
			sum += arr[i];
			max = sum;
		}
		// iterate the array once
		// and increment the right edge
		for (let i = k; i < n; i++) {
			sum += arr[i] - arr[i - k];
			
			// compare if sum is more than max,
			// if yes then replace
			// max with new sum value
			if (sum > max) {
				max = sum;
			}
		}
		return max;
	}

// Driver code
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 3;
let n = arr.length;

console.log('Result', maxSum(arr, n, k) );