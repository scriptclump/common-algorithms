/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    kill = 0;
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(board[i][j] == 'R'){
                x = i;
                y = j;
                break;
            }
        }
    }
    for(let i=x; i<=7;i++){
        if(board[x][i] == 'B'){
            break;
        }
        if(board[x][i] == 'p'){
            kill++;
            break;
        }
    }
    for(let i=x; i>=0;i--){
        if(board[x][i] == 'B'){
            break;
        }
        if(board[x][i] == 'p'){
            kill++;
            break;
        }
    }

    for(let i=y; i<=7;i++){  
        if(board[i][y] == 'B'){
            break;
        }     
        if(board[i][y] == 'p'){
            kill++;
            break;
        }
    }
    for(let i=y; i>=0;i--){
        if(board[i][y] == 'B'){
            break;
        }
        if(board[i][y] == 'p'){
            kill++;
            break;
        }
    }

    return kill;
};

// Test case:
// Input
// board = [[".",".",".",".",".",".",".","."],
// [".",".",".","p",".",".",".","."],
// [".",".",".","R",".",".",".","p"],
// [".",".",".",".",".",".",".","."],
// [".",".",".",".",".",".",".","."],
// [".",".",".","p",".",".",".","."],
// [".",".",".",".",".",".",".","."],
// [".",".",".",".",".",".",".","."]];
// Output 3


//Input: 
// board = [[".",".",".",".",".",".",".","."],
// [".","p","p","p","p","p",".","."],
// [".","p","p","B","p","p",".","."],
// [".","p","B","R","B","p",".","."],
// [".","p","p","B","p","p",".","."],
// [".","p","p","p","p","p",".","."],
// [".",".",".",".",".",".",".","."],
// [".",".",".",".",".",".",".","."]]
// Output: 0

// Input: 
board = [[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".","p",".",".",".","."],
["p","p",".","R",".","p","B","."],
[".",".",".",".",".",".",".","."],
[".",".",".","B",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".",".",".",".",".","."]]
// Output: 3

console.log(numRookCaptures(board))