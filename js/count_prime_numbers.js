var countPrime = (n) => {
    isPrime = [];
    count = 0;
    for(let i=2; i<n; i++){
        if(isPrime[i] == undefined){
            isPrime[i] = true;
            count++;
            for( j=2; i*j<n; j++){
                isPrime[i*j] = false;
            }
        }
    }

    return count;
}

console.log(countPrime(10));