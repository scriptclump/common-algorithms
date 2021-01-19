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