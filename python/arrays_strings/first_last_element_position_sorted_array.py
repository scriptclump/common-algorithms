from typing import List


class Solution:

    def getLeftPosition(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums)-1
        while(left <= right):
            mid = (left+right)//2
            if(nums[mid] == target):
                if(mid-1 >= 0 and nums[mid-1] != target or mid == 0):
                    return mid
                right = mid - 1
            elif(nums[mid] > target):
                right = mid-1
            else:
                left = mid+1
        return -1

    def getRightPosition(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums)-1
        while(left <= right):
            mid = (left+right)//2
            if(nums[mid]  == target):
                if(mid+1<len(nums) and nums[mid+1] != target or mid==len(nums)-1):
                    return mid
                left = mid + 1
            elif(nums[mid] > target):
                right = mid-1
            else:
                left = mid+1
        return -1

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left = self.getLeftPosition(nums, target)
        right = self.getRightPosition(nums, target)
        return [left, right]


s = Solution()
nums = [10,11,11,11,14,15]
target = 11
ans = s.searchRange(nums, target)
print(ans)