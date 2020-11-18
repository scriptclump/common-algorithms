function binarySearch(arr, target){
    left = 0;
    right = arr.length - 1;
    while (left <= right){
        mid = Math.floor( (left+right) / 2);
        if(arr[mid] == target){
            return mid;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


// ES6 Solution
binarySearchES6 = (arr, target) => {
    left = 0;
    right = arr.length - 1;
    while ( right >= left ){   // 5
        let mid = Math.floor( (left+right)/2 );  // 2
        if( arr[mid] == target){  //7 ==6
            return mid;
        } else if( arr[mid] > target){ //7 > 6
            right = mid -1;
        } else {
            left = mid +1;
        }
    }
    return -1;
}
var arr = [5,6,7,8,9,10];
var target = 6;
console.log(binarySearchES6(arr, target));