var twoSum = (N,target) =>{
    m = [];
    for(let i=0; i<N.length; i++){
        pair = target - N[i];
        if(pair in m){
            return [m[pair],i];
        }
        m[N[i]] = i; 
    }
    return -1;
}
N = [2,7,1,9,5];
target = 10;
console.log(twoSum(N,target))