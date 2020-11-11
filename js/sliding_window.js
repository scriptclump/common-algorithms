function maxSum(arr, digit_sum){
    var arrLen = arr.length;
    if(arrLen <= 2){
        return arr[0] + arr[1];
    }

    max_sum = 0;
    for(i=0; i<digit_sum; i++){
        max_sum += arr[i];
    }

    for(j=0; j<digit_sum){

    }

}


var arr = [80, -50, 90, 100];
var k = 2;