// Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

// Return the least number of moves to make every value in A unique.

 

// Example 1:

// Input: [1,2,2]
// Output: 1
// Explanation:  After 1 move, the array could be [1, 2, 3].
// Example 2:

// Input: [3,2,1,2,1,7]
// Output: 6
// Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
// It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
 

// Note:

// 0 <= A.length <= 40000
// 0 <= A[i] < 40000
 


var minIncrementForUnique = function(A) {
    A.sort((a,b) => a-b);
    let moves = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] >= A[i]) {
            let increment = A[i-1] - A[i] + 1;
            A[i] += increment;
            moves += increment;
        }
    }
    return moves;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(1)
};


var minIncrementForUnique2 = function(A) {
    let count = [], moves = 0;
    for (let i = 0; i < A.length; i++) {
        let num = A[i];
        if (count[num]) count[num] += 1; 
        else count[num] = 1;
    }
    
    for (let i = 0; i < count.length; i++) {
        let freq = count[i];
        if (freq >= 2) {
            count[i] = 1;
            if (count[i+1]) count[i+1] += freq-1;
            else count[i+1] = freq-1;
            moves += freq-1;
        }
    }
    return moves;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}