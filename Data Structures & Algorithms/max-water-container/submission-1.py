class Solution:
    def maxArea(self, heights: List[int]) -> int:
        maximum = 0
        i = 0
        j = len(heights) - 1

        while i < j:
            currArea = (j - i) * min(heights[i], heights[j])
            maximum = max(maximum, currArea)

            if heights[i] < heights[j]:
                i += 1
            else:
                j -= 1

        return maximum
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        # maximum = 0
        # for i, bar in enumerate(heights):
        #     curr = i + 1
        #     currHighest = 0

        #     while curr < len(heights):
        #         area = min(heights[curr], bar) * (curr - i)

        #         if area > maximum:
        #             maximum = area
                
        #         curr += 1
                
        
        # return maximum

