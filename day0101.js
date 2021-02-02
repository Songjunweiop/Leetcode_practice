// 寻找数组的中心索引
/**
 * @param {number[]} nums
 * @return {number}
 */
var myPivotIndex = function (nums) {
  var arr1 = [];
  for (let i = 0; i < nums.length; i++) {
    var leftnums = nums.reduce(
      (leftnums, curnum, curindex) => {
        if (curindex < i) leftnums.push(curnum);
        return leftnums;
      },
      [0]
    );
    var leftsum = eval(leftnums.join("+"));
    // console.log(leftnums);
    // console.log(leftsum);

    var rightnums = nums.reduce(
      (rightnums, curnum, curindex) => {
        if (curindex > i) rightnums.push(curnum);
        return rightnums;
      },
      [0]
    );
    var rightsum = rightnums.reduce((rightsum, curnum) => {
      return rightsum + curnum;
    });
    // console.log(rightnums);
    // console.log(rightsum);
    if (leftsum === rightsum) {
      arr1.push(i);
    }
  }
  console.log(arr1);
  if (arr1.length !== 0) console.log(arr1[0]);
  else console.log(-1);
};

var pivotIndex = (nums) => {
  let total = nums.reduce((total, curnum) => total + curnum, 0);
  var left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left == total - nums[i] - left) {
      console.log(i)
      return i;
    }
    left += nums[i];
  }
  console.log(-1)
  return -1;
};

// pivotIndex([1, 7, 3, 6, 5, 6]);
// pivotIndex([-1,-1,-1,-1,-1,0]);
myPivotIndex([-1, -1, -1, 0, 1, 1]);
