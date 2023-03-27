242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

# Solution:
    1. Create 2 array of s and t (Constant Time and Space O), and fill them with zeros.
    2. loop through each character and add the number by:
       s.charCodeAt(i) - "a".charCodeAt(0);
       to get the index.
    3. After iterating both strings, we iterate the number of alphabet and check if both has exactly the same amount of number in each array, return false if not equal is found.
    4. After the loop, return true, meaning all are the same.