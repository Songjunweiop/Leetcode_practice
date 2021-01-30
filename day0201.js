/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  console.log(parseInt(l1.reverse().join('')))
  console.log(parseInt(l2.reverse().join('')))
  let num1 = parseInt(l1.reverse().join(''))
  let num2 = parseInt(l2.reverse().join(''))
  var sum = num1+num2
  console.log(sum)
  console.log(sum.toString())
  console.log(sum.toString().split('').reverse())
};

addTwoNumbers([2,4,3], [5,6,4])