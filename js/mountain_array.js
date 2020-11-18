var isMountainArray = (N) => {
    
    if(N.length < 3){
        return false;
    }
    let i=1;
    while(i<N.length && (N[i]>N[i-1]) ){
        i++;
    }
    
    if(i == N.length){
        return false;
    }
    while(i<N.length && (N[i]<N[i-1]) ){
        i++;
    }

    if(i == N.length){
        return true;
    } else{
        return false;
    }

};



var N = [1,2,3,1];
console.log(isMountainArray(N));