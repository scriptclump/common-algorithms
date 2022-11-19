// 567. Permutation in String
// Medium


// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.
// Accepted
// 510,097
// Submissions
// 1,167,263


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1Map = new Map()
    for(const ch of s1) {
        s1Map.set(ch, s1Map.get(ch)+1 || 1);
    }
    let left = 0, count =s1.length;
    for(let right=0;right<s2.length;right++) {
        const ch = s2[right]
        if (s1Map.has(ch)) {
            if (s1Map.get(ch) > 0) {
                count--
            }
            s1Map.set(ch, s1Map.get(ch)-1)
        }
        if (right-left+1 <s1.length) {
            continue
        }
        if (count == 0) {
            return true
        }
        if (s1Map.has(s2[left])) {
            if (s1Map.get(s2[left]) >= 0) {
                count++
            }
            s1Map.set(s2[left], s1Map.get(s2[left])+1)
        }
        left++
    }
    return false
};