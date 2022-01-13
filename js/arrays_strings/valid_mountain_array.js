const validMountainArray = (arr) => {
    let i=1;
    while(i<arr.length && arr[i]>arr[i-1]){
        i++;
    }
    if(i === 1 || arr.length === i){
        return false;
    }
    while(i<arr.length && arr[i]<arr[i-1]){
        i++;
    }
    return i === arr.length;
}

arr = [0,1,2,4,2,1]
console.log(validMountainArray(arr))