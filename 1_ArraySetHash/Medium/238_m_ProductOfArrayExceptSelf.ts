function productOfArrayExceptSelf(nums: number[]):number[] {
    let leftProduct = new Array(nums.length).fill(1);
    let rightProduct = new Array(nums.length).fill(1);
    let productRecord = nums[0];
    for (let i = 1 ; i < nums.length; i++) {
        console.log(productRecord)
        leftProduct[i] *= productRecord;
        productRecord *= nums[i];
        
    }
    console.log(`left over`);
    productRecord = nums[nums.length - 1];
    for (let i = nums.length - 2 ; i >= 0; i--) {
        console.log(productRecord)
        rightProduct[i] *= productRecord;
        productRecord *= nums[i];
    }

    return leftProduct.map((value, index) => value * rightProduct[index])

}
console.log(productOfArrayExceptSelf([1,2,3,4]))