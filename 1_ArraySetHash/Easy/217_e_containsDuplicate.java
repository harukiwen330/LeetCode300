import java.util.HashSet;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        final HashSet<Integer> seen = new HashSet<Integer>();
        for (int i = 0; i < nums.length; i++) {
            seen.add(nums[i]);

            if (seen.size() != i+1) {
                return true;
            }
        }
        return false;
    }
}
