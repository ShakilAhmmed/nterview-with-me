class Solution:
  def solution(self):  
        length = len(list1)  
          
        for i in range(length-1):  
            for j in range(i+1, length):  
                if list1[i]+list1[j] == self.target:  
                    new_list = i, j  
                    return list(new_list)  
        return -1  