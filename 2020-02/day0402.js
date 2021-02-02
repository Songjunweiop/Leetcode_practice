// 最富有客户的资产总量
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const sumArr = accounts.map((curItem, curIndex) => {
    return curItem.reduce((curSum, curItem1) => {
      return (curSum += curItem1);
    }, 0);
  });
  console.log(Math.max(...sumArr));
  return Math.max(...sumArr);
};

maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
