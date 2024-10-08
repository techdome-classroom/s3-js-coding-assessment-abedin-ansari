/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (stack.length === 0 || map[s[i]] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}
// var isValid = function(s) {

// };

// module.exports = { isValid };
