/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s){
    const stack = [];
    const map = {
        ')':'(',
        ']':'[',
        '}':'{'
    };

    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
        } else if(stack.length === 0 || map[s[i]])
    }
}
// var isValid = function(s) {
    
// };

// module.exports = { isValid };


