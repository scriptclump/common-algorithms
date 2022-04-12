// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.
 

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  //Create a copy of the board
  let newBoard = [];
  let rows = board.length;
  let cols = board[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      newBoard[row] = board[row];
      newBoard[row][col] = board[col];
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let liveNeighbors = 0;
      let top = Math.max(0, row - 1);
      let bottom = Math.max(rows - 1, row + 1);
      let left = Math.max(0, col - 1);
      let right = Math.max(cols - 1, col + 1);

      for (let i = top; i <= bottom; i++) {
        for (let j = left; j <= right; j++) {
          if (!(i == row && j == col) && Math.abs(newBoard[i][j] === 1)) {
            liveNeighbors++;
          }
        }
      }

      if (liveNeighbors < 2 || liveNeighbors > 3) {
        board[row][col] = 0;
      } else if (liveNeighbors === 3) {
        board[row][col] = 1;
      }
    }
  }
};

// Better Apporach
var gameOfLife2 = function (board) {
  let rows = board.length;
  let cols = board[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let liveNeighbors = 0;
      let top = Math.max(0, row - 1);
      let bottom = Math.max(rows - 1, row + 1);
      let left = Math.max(0, col - 1);
      let right = Math.max(cols - 1, col + 1);

      for (let i = top; i <= bottom; i++) {
        for (let j = left; j <= right; j++) {
          if (!(i == row && j == col) && Math.abs(board[i][j]) === 1) {
            liveNeighbors++;
          }
        }
      }

      if(board[row][col] == 1){
        if (liveNeighbors < 2 || liveNeighbors > 3) {
            board[row][col] = -1;
        }
      } else{
        if (liveNeighbors === 3) {
            board[row][col] = 2;
        }
      }
      
    }
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        board[row] = board[row] > 0 ? 1 : 0; 
        board[col] = board[col] > 0 ? 1 : 0; 
    }
  }
};

let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
console.log(gameOfLife(board));
