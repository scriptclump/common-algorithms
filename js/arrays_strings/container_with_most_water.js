const containerWithMostWater = (height) => {
    let left = 0;
    let right = height.length -1;
    let maxArea = 0;
    while(left < right){
        length = Math.min(height[left], height[right]);
        width = right - left;
        area = length * width;        
        maxArea = Math.max(maxArea, area);
        if(height[left] < height[right]){
            left++;
        } else{
            right--;
        }
    }
    return maxArea;
}
height = [2,3,4,5,18,17,6];
console.log(containerWithMostWater(height))