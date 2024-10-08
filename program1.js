/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')':'(',
        ']':'[',
        '}':'{'
    };
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
        } else if(stack.length === 0 || map[s[i]] !== stack.pop())
    }
};

module.exports = { isValid };
