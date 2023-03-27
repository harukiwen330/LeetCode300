347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

# Solution

    1. Create a map that take nums[i] as key and its frequency as value;
    2. loop through the nums array, set 0 for new entry and + 1 for existing keys.
    3. make Array.from(map.keys())
    4. sort them from large to small with .sort((a,b) => map.get(b)! - map.get(a)!);
    5. slice them from the beginning to the k number with .slice(0,k);
    6. return the whole thing.