// Use of sliding window technique

const longestSubstringWithoutDuplicateCharacter = (str) => {
    let l = 0;
    let r = 0;
    let ans = 0;
    let m = {};
    let n = str.length;
    while(l < n && r < n){
        let el = str[r];
        if(el in m){
            l = Math.max(l, m[el]+1);
        }
        m[el] = r;
        ans = Math.max(ans, r-l +1 ); 
        r++;
    }
    return ans;
}

let str = 'abcabcbb'; // 3
// let str = 'abba'; // 2
// let str = 'aaabbbc'; // 2
// let str = 'abcddabakjp'; // 5
console.log(longestSubstringWithoutDuplicateCharacter(str));