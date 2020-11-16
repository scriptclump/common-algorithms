var longStr = (str) =>{
    left = 0;
    right = 0;
    ans = 0;
    m = {};
    n = str.length;
    while( left<n && right<n){
        el = str[right];
        if( el in m ){
            left = Math.max(left, m[el]+1);
        }
        m[el] = right;
        ans = Math.max(ans, right-left+1);
        right++;
    }
    return ans;
}

str= 'abba';
//console.log(longStr(str));




// Test case
// pwwkew
// abcabcbb
// abba

var uniqueStringLength = (str) =>{
    left = 0;
    right =0;
    ans = 0;
    m = {};
    n = str.length;
    while(left < n && right < n){
        el = str[right];
        if( el in m){
            left = Math.max(left, m[el] + 1);
        }
        m[el] = right;
        ans = Math.max(ans, right-left +1);
        right++;

    }
    return ans;
}

str = 'pwwkew';
console.log(uniqueStringLength(str))