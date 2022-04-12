// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let count = 0;
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if(grid[i][j] == '1') {
                count++;
                dfsSink(grid, i,j);
            }
        }
    }
    
    return count;
};

//if there are connected island sink them as connected island only count as one 
const dfsSink = (grid, i,j) => {
    //if out of bound or encounter sea
     if (i==grid.length ||i<0 ||j==grid[0].length||j<0||grid[i][j] =='0') {
         return;
     }
     if (grid[i][j] =='1') {
         grid[i][j] = '0';
         dfsSink(grid, i-1,j);
         dfsSink(grid, i,j-1);
         dfsSink(grid, i+1,j);
         dfsSink(grid, i,j+1);
     }
 }
let grid = [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ];
console.log(numIslands(grid))
 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.
