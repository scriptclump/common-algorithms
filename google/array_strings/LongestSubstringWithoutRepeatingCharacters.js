// Longest Substring Without Repeating Characters

// Solution
// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let l = 0,
     r = 0,
     ans = 0,
     m = {},
     n = str.length;
    while(left < n && right < n){
        let el = str[right];
        if(el in m){
            left = Math.max(left, m[el]+1);
        }
        m[el] = r;
        ans = Math.max(ans, right-left +1 ); 
        right++;
    }
    return ans;
};