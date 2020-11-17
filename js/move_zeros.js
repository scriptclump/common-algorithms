// var moveZerosToEnd = (N) => {

//     if(N.length < 1){
//         console.error('Invalid array size');
//         return -1;
//     }
//     j=0;
//     zeros = 0;
//     for(let i=0; i<=N.length-1; i++){
//         if(N[i] != 0){
//             N[j] = N[i];
//             j++;            
//         }else{
//             zeros++;
//         }
//     }
//     //console.log(j,N.length);
//     // N.fill(0,j,N.length);
//     return N;
// }

var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        if (!num) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};

N = [2,0,1,0,7,0,0,1];
console.log(moveZerosToEnd(N));