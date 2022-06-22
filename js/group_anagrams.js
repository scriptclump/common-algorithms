var sortStr = (str) =>{
    return str.split('').sort().join('');
}

var groupAnagrams = (N) => {
    result = [];
    for(let i=0; i<=N.length-1; i++){
        let hashed = sortStr(N[i]);
        if( !result[hashed]){
            result[hashed] = [];
        }
        result[hashed].push(N[i]);
    }    
    return Object.values(result);
}

N = ["eat", "bat", "ate", "tab", "ram", "arm"];
console.log(groupAnagrams(N));
// [ [ 'eat', 'ate' ], [ 'bat', 'tab' ], [ 'ram', 'arm' ] ]
// Time Complexity O( N * M * Log(M))
// Space complexity O(N) //Additional storage to store the hash values