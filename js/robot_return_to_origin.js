var roboPosition = (str) => {
    let x = 0; y = 0;
    for(let i=0; i<str.length; i++){
        
        if( str[i] == 'U') {
            x++;
        }
        if( str[i] == 'D') {
            x--;
        }
        if( str[i] == 'R') {
            y++;
        }
        if( str[i] == 'L') {
            y--;
        }   
    }
    if(x==0 && y==0){
        return true;
    } else{
        return false;
    }
}
str = 'UDRL';
console.log(roboPosition(str));