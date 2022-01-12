class Solution:
    def moveZeros(self, nums):
        j=0
        for num in nums:
            if (num !=0):
                nums[j] = num
                j+=1
        
        for x in range(j, len(nums)):
            nums[x] = 0