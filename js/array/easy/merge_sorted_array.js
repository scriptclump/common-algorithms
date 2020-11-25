var mergeSortedArr = (arr1, arr2) => {
    const mergedArr = [];
    let firstArrItem = arr1[0];
    let secondArrItem = arr2[0];
    let i = 1;
    let j = 1;


    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(arr1.length === 0) {
        return arr2;
    }
    if(arr2.length === 0) {
        return arr1;
    }

    while(firstArrItem || secondArrItem){
        if(secondArrItem === undefined || firstArrItem<secondArrItem){
            mergedArr.push(firstArrItem);
            firstArrItem = arr1[i];
            i++;
        } else{
            mergedArr.push(secondArrItem);
            secondArrItem = arr2[j];
            j++;
        }
    }
    return mergedArr;
}

let arr1 = [0,3,4,31];
let arr2 = [3,4,6,30];

console.log(mergeSortedArr(arr1,arr2));