class Solution:
    def twoSum(self, nums, target):
      length = len(nums)  
          
        for i in range(length-1):  
            for j in range(i+1, length):  
                if nums[i]+nums[j] == self.target:  
                    new_list = i, j  
                    return list(new_list)  
        return -1  