/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let mynums = nums
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < mynums.length; j++) {
      console.log(i,j)
      
      if (nums[i] + mynums[j] === target) {
        arr.push(i, j);
        i=999999999
        j=999999999
      }
    }

  }
  console.log(arr);
};

twoSum([2, 7, 11, 15], 9);
// twoSum([3,2,4], 6);
// twoSum([2,5,5,11],10);
