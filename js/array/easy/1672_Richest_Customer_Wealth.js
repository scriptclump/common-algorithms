// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money
//  the ith customer has in the jth bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts.
//  The richest customer is the customer that has the maximum wealth.

 

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17
 

// Constraints:

// m == accounts.length
// n == accounts[i].length
// 1 <= m, n <= 50
// 1 <= accounts[i][j] <= 100


/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.reduce((acc, val) => {
        const result = val.reduce((acc, val) => acc + val, 0);
        return Math.max(result, acc);
    }, 0)
};


const sum = (array) => array.reduce((a, b) => a + b, 0);

const maximumWealth2 = (accounts) => accounts
  .reduce((max, account) => Math.max(max, sum(account)), -Infinity);


  var maximumWealth3 = function(accounts) {
    // Add the base condition
    if (accounts.length <= 1) {
      return sum(accounts[0])
    }
  
      max_wealth = sum(accounts[0]);
    for(i=1; i<accounts.length; i++){
    //	console.log(sum(accounts[i]))
        if( sum(accounts[i]) > max_wealth ){
              max_wealth = sum(accounts[i])
      }
    }  
    return max_wealth;
  
  };

// Test case
accounts = [[1,2,3],[3,2,1]] // Output: 6
accounts = [[1,5],[7,3],[3,5]] // Output: 10
accounts = [[2,8,7],[7,1,3],[1,9,5]] // Output: 17

console.log(maximumWealth(accounts))