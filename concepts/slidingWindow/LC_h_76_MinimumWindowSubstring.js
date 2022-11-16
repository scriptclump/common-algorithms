// 76. Minimum Window Substring
// Hard
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.


//approach: sliding window
//it mentions 'window substring'

//since we want to find the t in s, and return min length,
//we can apply similar logic to finding all anagrams or permutation in string.
//create a map to store the letter and its count for t
//then assign a new count variable the length of t,
//count will decrease while expanding the window and decrease when shrinking the window
//
//expansion:
//we keep increasing until we find all the letter from t,
//practically, finding all t means, count == 0,
//while expanding, we keep decreasing the letter's count in the map pointed by right,
//if we encounter the letter in s pointed by right, that is already in map, we decrease count by -1,
//
//shrinking:
//if count === 0, that means we found all the letter from t
//then goal is to keep shrinking the window, until we find the minimum length
//that contains all letters of t,
//we increase the letter count in s pointed by left,
//if we encounter the letter in s pointed by left to be >= 0, we increase the letter count by 1,
//here (..>=0) is important, as some duplicate letters will go below 0 sometimes, and we dont want to
//increase count variable in that case.
//we will also keep track of the minimum, while shrinking so that in the end we can return the minimum substr
//we will assign the left to the leftSubstr, and right to rightSubstr.
//we are doing so, because we are keeping track of the minimum window index so we can later return the correct window substring




/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = new Map();
  let right = 0;
  let left = 0;
  let count = t.length;
  let minStr = "";
  let min = Infinity;
  let leftSubstr = -1;
  let rightSubstr = -1;

  for (let char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  while (right < s.length) {
    if (map.get(s[right]) > 0) count--;
    map.set(s[right], (map.get(s[right]) || 0) - 1);

    while (count === 0) {
      //assigning indices instead of using substr here, to make it faster.
      if (min > right - left + 1) {
        min = right - left + 1; //since we already know min > window length, we dont have to do Math.min(...)
        leftSubstr = left;
        rightSubstr = right;
      }

      if (map.get(s[left]) >= 0) count++;

      map.set(s[left], (map.get(s[left]) || 0) + 1);

      left++;
    }
    right++;
  }

  return s.substring(leftSubstr, rightSubstr + 1); //since substring is end exclusive, so right+1, gives the element in right
};

const s = "ADOBECODEBANC",
  t = "ABC";
console.log("ans: ", minWindow(s, t));
