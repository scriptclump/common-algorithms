var moveZerosToEnd2 = (N) => {

    if(N.length < 1){
        console.error('Invalid array size');
        return -1;
    }
    j=0;
    for(let i=0; i<=N.length-1; i++){
        if(N[i] != 0){
            N[j] = N[i];
            j++;            
        }
    }
    for(let k=j; k<=N.length-1; k++){
        N[k] =0
    }
    
    return N;
}

var moveZerosToEnd = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        if (!num) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

N = [2,0,1,0,7,0,0,1];
console.log(moveZerosToEnd(N));