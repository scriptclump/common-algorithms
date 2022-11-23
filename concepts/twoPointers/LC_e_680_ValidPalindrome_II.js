// 680. Valid Palindrome II
// Easy

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// Accepted
// 558,080
// Submissions
// 1,419,071


/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    let left = 0, right = s.length -1, found = 0;
    while(left < right){
        if(s[left].toLowerCase() !== s[right].toLowerCase() ){
            found++;
            if(found > 1){
                return false;
            }
        }
        left++;
        right--;
    }
    return true;
};

// Test Cases:
//  const s = "aba"; // true
//  const s = "abca"; // true
//  const s = "abc"; // false
const s = "abcd";
console.log("Res:", validPalindrome(s));