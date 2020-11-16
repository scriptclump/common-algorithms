var findMissingNumber = (N) => {
    n = N.length;
    expected = n*(n+1)/2;
    

    var actual = N.reduce(function(a, b){
        return a + b;
    }, 0);
    return expected - actual;
}

N = [3,2,7,6,4,1,0,9,5];
console.log(findMissingNumber(N));