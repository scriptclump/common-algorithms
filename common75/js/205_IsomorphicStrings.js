// 205. Isomorphic Strings
// Easy

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.


var isIsomorphic = function(s, t) {
    if (s.length !== t.length){
        return false;
    } 
    let m = new Map();
    for (let i = 0; i < s.length; i++) {
        if (m.has(s[i]) && m.get(s[i]) !== t[i]){
            return false;
        } else{
            m.set(s[i],t[i]);
        } 
    }
    return new Set([...m.values()]).size === m.size; 
    // this checks if more than one character map to the same character
};
let s = "foo", t = "bar"
console.log(isIsomorphic(s,t))