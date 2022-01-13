from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height)-1
        maxArea = 0
        while(l < r):
            length = min(height[l], height[r])
            width = r-l
            area = width*length
            maxArea = max(maxArea, area)
            if(height[l] < height[r]):
                l += 1
            else:
                r -= 1
        return maxArea


s = Solution()
height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
ans = s.maxArea(height)
print(ans)