var addBinary = (a,b) => {
    i = a.length -1;
    j = b.length -1;
    carry = 0;
    result = [];
    while( i>= 0 && j>= 0 || carry >0){
        total = carry;
        if (i >= 0){
            total += parseInt(a[i]);
            i--;
        }
        if (j >= 0){
            total += parseInt(b[j]);
            j--;
        }
        result.push( String(total % 2));
        carry = Math.floor(total / 2);
    }
    result.reverse();
    return result.join('');
}
a = '110';
b = '010';
console.log(addBinary(a,b))
// result    1000