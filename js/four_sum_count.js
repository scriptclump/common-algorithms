var fourSumCount = (A, B, C, D) => {
    m = [];
    ans = 0;

    for(let i=0; i<A.lenght; i++){
        x = A[i];
        for(let j=0; j<B.lenght; j++){
            y = B[j];
            sum = x+y;
            if( sum in m){
                m[sum] = 0;
            }
            m[sum] +=1;
        }
    }

    for(let k=0; k<C.lenght; k++){
        x = C[k];
        for(let l=0; l<D.lenght; l++){
            y = D[l];
            target = -(x+y);
            if( target in m){
                ans += m[target];
            }
        }
    }

    return ans;
}

A = [1,2];
B = [-2,-1];
C = [-1,2];
D = [0,2];

console.log(fourSumCount(A, B, C, D));