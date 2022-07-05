// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 const addStrings = (num1, num2) => {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
  
    let carry = 0;
    let result = "";
  
    while (p1 >= 0 || p2 >= 0 || carry) {
      const num1Digit = +num1[p1] || 0;
      const num2Digit = +num2[p2] || 0;
  
      const sum = num1Digit + num2Digit + carry;
      carry = 0;
      const hasCarry = sum >= 10;
      if (hasCarry) {
        carry = 1;
      }
        
      result = `${sum - (hasCarry ? 10 : 0)}${result}`;
        
      p1--;
      p2--;
    }
      
    return result;
  };

// class Solution:
//     def addStrings(self, num1: str, num2: str) -> str:
//         res = []

//         carry = 0
//         p1 = len(num1) - 1
//         p2 = len(num2) - 1
//         while p1 >= 0 or p2 >= 0:
//             x1 = ord(num1[p1]) - ord('0') if p1 >= 0 else 0
//             x2 = ord(num2[p2]) - ord('0') if p2 >= 0 else 0
//             value = (x1 + x2 + carry) % 10
//             carry = (x1 + x2 + carry) // 10
//             res.append(value)
//             p1 -= 1
//             p2 -= 1
        
//         if carry:
//             res.append(carry)
        
//         return ''.join(str(x) for x in res[::-1])


// class Solution {
//     public String addStrings(String num1, String num2) {
//         StringBuilder res = new StringBuilder();

//         int carry = 0;
//         int p1 = num1.length() - 1;
//         int p2 = num2.length() - 1;
//         while (p1 >= 0 || p2 >= 0) {
//             int x1 = p1 >= 0 ? num1.charAt(p1) - '0' : 0;
//             int x2 = p2 >= 0 ? num2.charAt(p2) - '0' : 0;
//             int value = (x1 + x2 + carry) % 10;
//             carry = (x1 + x2 + carry) / 10;
//             res.append(value);
//             p1--;
//             p2--;    
//         }
        
//         if (carry != 0)
//             res.append(carry);
        
//         return res.reverse().toString();
//     }
// }