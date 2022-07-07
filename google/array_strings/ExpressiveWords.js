// Sometimes people repeat letters to represent extra feeling. For example:

// "hello" -> "heeellooo"
// "hi" -> "hiiii"
// In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".

// You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more.

// For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has a size less than three. Also, we could do another extension like "ll" -> "lllll" to get "helllllooo". If s = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = s.
// Return the number of query strings that are stretchy.

 

// Example 1:

// Input: s = "heeellooo", words = ["hello", "hi", "helo"]
// Output: 1
// Explanation: 
// We can extend "e" and "o" in the word "hello" to get "heeellooo".
// We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
// Example 2:

// Input: s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]
// Output: 3
 

// Constraints:

// 1 <= s.length, words.length <= 100
// 1 <= words[i].length <= 100
// s and words[i] consist of lowercase letters.
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var expressiveWords1 = function(s, words) {
    
};


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var expressiveWords = function(s, words) {
    let counter = 0;
    for(let word of words)
        if(word.length < s.length && isStrechy(word, s)) counter++;
    
    return counter;
};

let isStrechy = (source, target) => {
    let counterS = 1, counterT = 1;
    let i, j;
    for(i = 0, j = 0; i < source.length && j < target.length; i++, j++) {
        if(source[i] != target[j]) return false;
        
        while (source[i] == source[i + 1]) {
            i++;
            counterS++;
        }
        while(target[j] == target[j + 1]) {
            j++;
            counterT++;
        }
        if(counterT < counterS) return false;
        else if(counterS == 1 && counterT == 2) return false;
        
        counterS = 1, counterT = 1;
    }
    
    return j == target.length;
}