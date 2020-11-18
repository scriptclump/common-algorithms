var singleNumber = (N) =>{
    let uniqueArr = [... new Set(N)];
    uniqueArrSum = uniqueArr.reduce( (a, b) => a + b );
    arrSum = N.reduce( (a, b) => a + b );
    return 2*uniqueArrSum - arrSum;
}

//N = [2,2,1]
N = [4,1,2,1,2]
console.log(singleNumber(N))