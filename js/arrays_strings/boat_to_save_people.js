const requiredBoatToSavePeople = (people, limit) => {
    people.sort(function(a, b){return a-b});
    l = 0;
    h = people.length - 1;
    let boat = 0;
    while(l <= h){
        if(people[l] + people[h] <= limit){
            l++;
            h--;
        } else{
            h--;
        }
        boat++;
    }
    return boat;
}
const limit = 50;
const people = [44,10,29,12,49,41,23,5,17,26];
console.log(requiredBoatToSavePeople(people, limit))