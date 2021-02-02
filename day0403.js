// 左旋转字符串
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

const reverseLeftWords = (s, n) => {
  const temp = s.slice(0, n);
  return s.slice(n) + temp;
};
reverseLeftWords("abcdefg", 2);
