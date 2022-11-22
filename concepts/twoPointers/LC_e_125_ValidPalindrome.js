// 125. Valid Palindrome
// Easy

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
// Accepted
// 1,657,140
// Submissions
// 3,793,686

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // Check the base condition
    if(s.length <=1) return true;
    
    let left = 0, right = s.length-1;
    const pattern = /^[A-Za-z]+$/;
    while(left < right){
        let leftElement = s[left].toLowerCase();
        let rightElement = s[right].toLowerCase();
        if(!pattern.test(leftElement)){
            left++;
        } else if(!pattern.test(rightElement)){
            right--;
        } else {
            if( leftElement.toLowerCase() === rightElement.toLowerCase() ){
                left++;
                right--;
            } else{
                return false
            }
        }    
    }
    return true;   
};

// Test Cases:
// const s = "A man, a plan, a canal: Panama" // true
// const s = "race a car" // false
const s = " " // return true
console.log("Res: ", isPalindrome(s));