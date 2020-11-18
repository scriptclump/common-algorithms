var majorityElements = (nums) => {
    if(nums.length ===1){
        return nums[0];
    }
    let map = new Map();
    nums.forEach((num)=>{
        if(map.get(num)){
            map.set(num,map.get(num)+1);
        }else {
            map.set(num,1);
        }
    });
    let size = nums.length/2;
    for (let key of map.keys()) {
       if(map.get(key)>size){
        return key;
       }
    }
}

N = [1,2,4,2,2];
console.log(majorityElements(N));

