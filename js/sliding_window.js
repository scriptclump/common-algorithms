var maxPairSum = (arr, pairSize) => {
    if(pairSize > arr.length){
        console.error("Pair size must be less than array size.")
        return -1;
    }

    maxPairSum = 0;
    for(let i=0; i<pairSize; i++){
        maxPairSum += arr[i];
    }

    for(let j=0; j<arr.length-pairSize; j++){
        newMaxPairSum = maxPairSum - arr[j] + arr[j+pairSize];
        if(newMaxPairSum > maxPairSum){
            maxPairSum = newMaxPairSum;
        }
    }
    return maxPairSum;
}

var arr = [80, -50, 90, 100];
var pairSize = 3;
console.log(maxPairSum(arr, pairSize) );

// 120