// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 var characterReplacement = function(s, k) {
    let left=0,
    right = 0,
    res = 0;
    const map = new Map();
    while(right < s.length){
        let rightElement = s[right];
        let leftElement = s[left];
        if(map.get(rightElement) !== undefined){
            map.set(rightElement, map.get(rightElement) + 1 );
        } else{
            map.set(rightElement, 1 );
        }
        let length = right-left+1;
        let maxInMap = Math.max(...map.values());
        if(length - maxInMap <= k){
            res = (length > res ? length : res);
        }else{
            map.set(leftElement, map.get(leftElement) - 1);
            left++
        }
        right++;
    }
    
    return res;
};

 var characterReplacementHashMap = function(s, k) {
    let left=0,
    right = 0,
    res = 0;
    const hash = {};
    
    while(right < s.length){
        hash[s[right]] = (hash[s[right]] ? hash[s[right]]+1 : 1);
        let length = right - left + 1;
        if(length - Math.max(...Object.values(hash)) <= k){
            res = (length > res? length : res)
        } else{ 
            hash[s[left]]--;
            left++;
        }
        right++;
    }
    return res;
};

const s = "AABABBA", k = 1;
// const s = "ABAB", k = 2;
console.log(characterReplacement(s, k));