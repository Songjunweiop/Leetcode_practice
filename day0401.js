// 一维数组的动态和
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  var arrSum = nums.map((currentValue, curIndex) => {
    var sums = nums.slice(1, curIndex + 1).reduce((resault, curItem) => {
      return (resault += curItem);
    }, 0);
    return sums + nums[0];
  });
  console.log(arrSum);
  return arrSum;
};

runningSum([1, 2, 3, 4]);
runningSum([1, 1, 1, 1, 1]);
runningSum([3, 1, 2, 10, 1]);
