function TopKFrequentElements(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    return Array.from(map.keys())
        .sort((a, b) => map.get(b)! - map.get(a)!)
        .slice(0, k);
}
