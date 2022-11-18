// # 438. Find All Anagrams in a String
// # Medium

// # Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// # An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// # Example 1:

// # Input: s = "cbaebabacd", p = "abc"
// # Output: [0,6]
// # Explanation:
// # The substring with start index = 0 is "cba", which is an anagram of "abc".
// # The substring with start index = 6 is "bac", which is an anagram of "abc".
// # Example 2:

// # Input: s = "abab", p = "ab"
// # Output: [0,1,2]
// # Explanation:
// # The substring with start index = 0 is "ab", which is an anagram of "ab".
// # The substring with start index = 1 is "ba", which is an anagram of "ab".
// # The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// # Constraints:

// # 1 <= s.length, p.length <= 3 * 104
// # s and p consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map = new Map(), sLen = s.length, pLen = p.length, res = [];
    let left = 0, right = 0, matched = 0;
    // Setup the map with p characters with default 1 value
    for(const i of p){
        let mapValue =  map.get(i) !== undefined ? map.get(i) + 1 : 1;
        map.set(i, mapValue);
    }
    while(right < sLen){
        const rightChar = s[right];
        // Check character in exiting map
        // Once character found reduce the value
        // Once character value is zero increase matched 
        if(map.get(rightChar) !== undefined){
            map.set(rightChar, map.get(rightChar) - 1);
            if(map.get(rightChar) === 0){
                matched++;
            }
        }
        // Once matched, get right postion & push to result
        if(matched === map.size){
            res.push(right - pLen + 1);
        }

        // Move the left pointer
        if(right - left + 1 > pLen - 1){
            const leftChar = s[left];
            if(map.get(leftChar) !== undefined){
                if(map.get(leftChar) === 0){
                    matched--;
                }
                map.set(leftChar, map.get(leftChar) + 1);
            }
            left++;
        }
        right++;
    }

    return res;
};

var findAnagramsHashMap = function(s, p) {
    const map = {}, sLen = s.length, pLen = p.length, res = [];
    let left = 0, matched = 0;
    for(const i of p){
        if(!map[i]) map[i] = 1;
        else map[i]++;
    }
    for(let right = left; right < sLen; right++){
        const char = s[right];
        if(map[char] !== undefined){
            map[char]--;
            if(map[char] === 0){
                matched++;
            }
        }
        let mapLen = Object.keys(map).length;
        if(matched === mapLen){
            res.push(right - pLen + 1);
        }
        
        if(right - left + 1 > pLen - 1){
            const leftChar = s[left];
            if(map[leftChar] !== undefined){
                if(map[leftChar] === 0){
                    matched--;
                }
                map[leftChar]++;
            }
            left++;
        }
    }
    return res;
};


const s = "cbaebabacd", p = "abc";
console.log("Res:", findAnagrams(s,p));