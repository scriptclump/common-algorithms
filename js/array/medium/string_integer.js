/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);
    var s = str.replace(/^ */, '');
    var match = /^(?:\-|\+)?(\d+)/.exec(s);
    if(match) {
        var sign = (s.charAt(0) == '-') ? -1 : 1; 
        var digits = match[1]; 
        var gating = Math.floor(INT_MAX / 10);
        var last = INT_MAX - (gating * 10) - (sign == 1 ? 1 : 0);
        var r = 0;
        for(var i = 0; i < digits.length; ++i) {
            var cnum = parseInt(digits.charAt(i));

            if ((r == gating && cnum > last) || r > gating) {
                return (sign == 1) ? INT_MAX : INT_MIN;
            } else {
                r = (r * 10) + cnum; 
            }
        }
        return sign * r;
    } else {
        return 0; 
    }
};

// Test Cases
// Input: str = "42"
// Output: 42

// Input: str = "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign. 
// Then take as many numerical digits as possible, which gets 42.

// Input: str = "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

// Input: str = "words and 987"
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.


// Input: str = "-91283472332"
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.