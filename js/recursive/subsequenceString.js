// https://www.geeksforgeeks.org/given-two-strings-find-first-string-subsequence-second/
// Given two strings, find if first string is a subsequence of second


// Given two strings str1 and str2, find if str1 is a subsequence of str2. A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements (source: wiki). Expected time complexity is linear.

// Examples :

// Input: str1 = "AXY", str2 = "ADXCPY"
// Output: True (str1 is a subsequence of str2)

// Input: str1 = "AXY", str2 = "YADXCP"
// Output: False (str1 is not a subsequence of str2)

// Input: str1 = "gksrek", str2 = "geeksforgeeks"
// Output: True (str1 is a subsequence of str2)

var isSubsequence = ( str1, str2, m, n ) => {
    if(m == 0){ return true; }
    if(n == 0){ return false; }

    if( str1[m-1] === str2[n-1] ){
        return isSubsequence(str1, str2, m-1, n-1);
    }

    return isSubsequence(str1, str2, m, n-1);
}
str1 = 'AXY';
str2 = 'ADXCPY';
str1 = "AXY", str2 = "YADXCP"; // Output: False (str1 is not a subsequence of str2)


m = str1.length;
n = str2.length;
console.log(isSubsequence(str1, str2, m, n));
