import java.util.HashMap;

class Solution {
    public boolean isAnagram(String s, String t) {
        final HashMap<Character, Integer> sCount = new HashMap<Character, Integer>();
        final HashMap<Character, Integer> tCount = new HashMap<Character, Integer>();

        if (s.length() != t.length()) {
            return false;
        }

        for (int i = 0; i < s.length(); i++) {
            char sc = s.charAt(i);
            int scAmount = 1;
            if (sCount.containsKey(sc)) {
                scAmount += sCount.get(sc);
            }
            sCount.put(sc, scAmount);

            char tc = t.charAt(i);
            int tcAmount = 1;
            if (tCount.containsKey(tc)) {
                tcAmount += tCount.get(tc);
            }
            tCount.put(tc, tcAmount);
        }

        return sCount.equals(tCount);
    }
}