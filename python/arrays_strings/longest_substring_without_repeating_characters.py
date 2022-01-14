from typing import List

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        right = 0
        m = {}
        ans = 0
        n = len(s)
        while(left <n and right <n):
            el = s[right]
            if(el in m):
                left = max(left, m[el] +1)
            m[el] = right
            ans = max(ans, right-left +1)
            right+=1
        return ans





s = Solution()
# str = 'abcabcbb'; # 3
# str = 'abba'; # 2
# str = 'aaabbbc'; # 2
str = 'abcddabakjp'; # 5
ans = s.lengthOfLongestSubstring(str)
print(ans)