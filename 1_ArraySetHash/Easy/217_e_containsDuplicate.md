217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

# Solution (Typescript):
    1. Create a set and check if the next item has already registered in the Set(); return yes when found
    2. If not, add them to the set and keep looping.
    3. If loop is over. return false

# Solution 2 (Java):
    1. Create a HashSet
    2. Iterate over the items in a for loop, In the for loop:
        a. Add the item to the HashSet
        b. Compare the size of the HashSet to the number of items iterated over. If there is a duplicate, then the HashSet will have fewer items than the number of iterations (the counter var of the for loop + 1) and you return true
    3. If the loop finishes, return false
