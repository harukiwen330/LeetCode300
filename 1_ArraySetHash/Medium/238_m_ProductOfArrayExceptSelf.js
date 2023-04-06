function productOfArrayExceptSelf(nums) {
    var leftProduct = new Array(nums.length).fill(1);
    var rightProduct = new Array(nums.length).fill(1);
    var productRecord = nums[0];
    for (var i = 1; i < nums.length; i++) {
        console.log(productRecord);
        leftProduct[i] *= productRecord;
        productRecord *= nums[i];
    }
    console.log("left over");
    productRecord = nums[nums.length - 1];
    for (var i = nums.length - 2; i >= 0; i--) {
        console.log(productRecord);
        rightProduct[i] *= productRecord;
        productRecord *= nums[i];
    }
    return leftProduct.map(function (value, index) { return value * rightProduct[index]; });
}
console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
