238. Product of Array Except Self
Medium
16.9K
929
company
Amazon
company
Bloomberg
company
Google
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


# Solution
    1. create a left and right product and store them with 1s.
        e.g. leftProduct: [1,1,1,1,1] rightProduct: [1,1,1,1,1]
    2. create a productRecord to store the multiplied vlaues.
    3. loop from the second item (i = 1) to the end, multiply the current product record to the leftProduct.
        e.g. leftProduct [1, 1, 2, 6]
             productRecord: 1 --> 2(1*2) --> 6(2*3) --> 24(6*4)
    4. set the product record to the last items's value.
       
    5. loop from the second LAST item (i = nums.length-2) to the start, multiply the current product record to the rightProduct.
        e.g. rightProduct [24, 12, 4, 1]  
             productRecord: 4 --> 12 --> 24
    6. Multiple two together:
        e.g. []