var containDuplicates = (N) => {
    m = [];
    for(let i=0; i<=N.length-1; i++){
        if(N[i] in m){
            return true;
        }
        m[N[i]] = 0;
    }
    return false;
}

N = [1,0,2,3,4,1];
console.log(containDuplicates(N));

// Time complexity O(N)
// Space complexity O(N)