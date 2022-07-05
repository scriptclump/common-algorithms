// Given two binary strings a and b, return their sum as a binary string.

 // Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

var addBinary = function(a, b) {
    let binaryA = BigInt(`0b${a}`);
    let binaryB = BigInt(`0b${b}`);
    let sum = binaryA + binaryB;
    return sum.toString(2);
};

/*
I used array because string is an immutable object in JS and
this causes the program to repeatedly create a new string
*/
var addBinary2 = function(a, b) {
    let i = a.length - 1, j = b.length - 1;
    let res = new Array(Math.max(a.length, b.length) + 1);
    let idx = Math.max(i, j) + 1;
    let carry = 0, sum = 0;
    while (i >= 0 && j >= 0) {
        sum = Number(a[i--]) + Number(b[j--]) + carry;
        res[idx--] = sum % 2;
        carry  = sum >= 2 ? 1 : 0;
    }
    
    while (i >= 0) {
        sum = Number(a[i--]) + carry;
        res[idx--] = sum % 2;
        carry  = sum >= 2 ? 1 : 0;
    }

    while (j >= 0) {
        sum = Number(b[j--]) + carry;
        res[idx--] = sum % 2;
        carry  = sum >= 2 ? 1 : 0;
    }
    if (carry > 0) {
        res[0] = carry;
    }
    return res.join("");
    // T.C: O(max(M,N))
    // S.C: O(max(M,N))
};