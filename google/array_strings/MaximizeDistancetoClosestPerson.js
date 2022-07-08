// 849. Maximize Distance to Closest Person
// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

// There is at least one empty seat, and at least one person sitting.

// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

// Return that maximum distance to the closest person.

 

// Example 1:


// Input: seats = [1,0,0,0,1,0,1]
// Output: 2
// Explanation: 
// If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.
// Example 2:

// Input: seats = [1,0,0,0]
// Output: 3
// Explanation: 
// If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.
// Example 3:

// Input: seats = [0,1]
// Output: 1
 

// Constraints:

// 2 <= seats.length <= 2 * 104
// seats[i] is 0 or 1.
// At least one seat is empty.
// At least one seat is occupied.


/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {
    let arr = seats.join('').split('1');
    for(let i = 0; i < arr.length;i++){
        if(arr[i] == '')
            arr[i] = 0;
        else{
            let middle = true;
            if(i == 0 || i == arr.length-1){
                arr[i] = arr[i].length;
            }else {
                arr[i] = Math.ceil(arr[i].length/2);
            } 
        }
    }
    return arr.sort((a,b) => (a >= b)?-1:1)[0]
};

// class Solution {
//     public int maxDistToClosest(int[] seats) {
//         int N = seats.length;
//         int[] left = new int[N], right = new int[N];
//         Arrays.fill(left, N);
//         Arrays.fill(right, N);

//         for (int i = 0; i < N; ++i) {
//             if (seats[i] == 1) left[i] = 0;
//             else if (i > 0) left[i] = left[i-1] + 1;
//         }

//         for (int i = N-1; i >= 0; --i) {
//             if (seats[i] == 1) right[i] = 0;
//             else if (i < N-1) right[i] = right[i+1] + 1;
//         }

//         int ans = 0;
//         for (int i = 0; i < N; ++i)
//             if (seats[i] == 0)
//                 ans = Math.max(ans, Math.min(left[i], right[i]));
//         return ans;
//     }
// }