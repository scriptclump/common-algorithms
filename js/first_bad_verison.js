var badVersion = () =>{
    return 16;
}

var firstBadVersion = (versions) => {
    left = 0;
    right = versions.length -1;
    target = badVersion();
    while(left <= right){
        mid = Math.floor( (left+right) / 2 );        
        //console.log(mid);
        if( versions[mid] == target ){
            return mid;
        } else if( versions[mid] > target ){
            right--;
        } else{
            left++;
        }        
    }
    return -1;
}

var versions = [11,12,13, 14, 15, 16];
console.log(firstBadVersion(versions));