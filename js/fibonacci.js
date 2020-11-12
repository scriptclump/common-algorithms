var fibonacciSum = (n) => {
    fno = 0;
    sno = 1;
    tno = fno + sno;
    for(let i=tno; i<n; i++){
        tno = fno + sno;
        fno = sno;
        sno = tno;
    }
    return tno;
}

var fibonacciSeries = (n) => {
    fno = 0;
    sno = 1;
    tno = fno + sno;
    series = fno +','+sno+',';
    for(let i=tno; i<n; i++){
        tno = fno + sno;
        fno = sno;
        sno = tno
        series += tno+',';
    }
    return series.substr(-1);
};

// 0,1,1,2,3,5,8,13, 21

res = fibonacciSum(8);
res = fibonacciSeries(8);
console.log(res);