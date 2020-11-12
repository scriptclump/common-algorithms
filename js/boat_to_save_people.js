var numRescueBoat = (people, limit) => {
    if( people.length < 1 ) { return false; }
    if( people.length == 1 ) { return 1; }
    people.sort();
    boats = 0;
    left = 0;
    right = people.length -1;
    while(left <= right){
        if(people[left] + people[right] == limit){
            boats++;
            left++;
            right--;
            break;
        } else if (people[right] >= limit ){
            boats++;
            right--;
        } else{
            boats++;
            left++;
            right--;
        }
    }
    return boats;
}

var numRescueBoat2 = (people, limit) =>{
    boats = 0;
    people.sort();
    for (let left = 0, right = people.length - 1; left <= right; --right, ++boats){
        if (people[left] + people[right] <= limit){
            ++left;
        }
    }
    return boats;
} 


var people = [1,2,3,3];
var limit = 3;
console.log(numRescueBoat(people, limit));
console.log(numRescueBoat2(people, limit));