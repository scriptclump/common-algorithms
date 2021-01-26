def maximumWealth(accounts):
    # Add the base condition
    if ( len(accounts) <= 1):
      return sum(accounts[0])
  
    max_wealth = sum(accounts[0])
    for i in range(accounts):
        if( sum(accounts[i]) > max_wealth ):
            max_wealth = sum(accounts[i])
    return max_wealth



# accounts = [[1,2,3],[3,2,1]] // Output: 6
# accounts = [[1,5],[7,3],[3,5]] // Output: 10
# accounts = [[2,8,7],[7,1,3],[1,9,5]] // Output: 17

