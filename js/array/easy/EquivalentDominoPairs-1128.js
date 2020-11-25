/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let result = 0;
    arr = [];
    for(let i=0; i<dominoes.length; i++){
        a = dominoes[i][0];
        b = dominoes[i][1];
        if(x in arr ){
            arr[x] += 1;
            result++;
        }
        arr[x] = 1;
    }
    return result;
};

// dominoes = [[1,2],[2,1],[3,4],[5,6]];

dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]];
console.log(numEquivDominoPairs(dominoes));