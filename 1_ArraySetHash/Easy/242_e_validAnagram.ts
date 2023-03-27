function validAnagram(s: string, t: string): boolean {
    const arrayS = new Array(26).fill(0);
    const arrayT = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        arrayS[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    for (let i = 0; i < t.length; i++) {
        arrayT[t.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    for (let i = 0; i < arrayS.length; i++) {
        if (arrayS[i] !== arrayT[i]) return false;
    }
    return true;
}
