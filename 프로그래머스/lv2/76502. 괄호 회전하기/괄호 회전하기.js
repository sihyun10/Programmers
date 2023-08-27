function solution(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {        
        const stack = [];
        for(let j = 0; j < s.length; j++) {
            if(stack.length > 0) {
                if((stack[stack.length-1] === '(' && s[j] === ')') ||(stack[stack.length-1] === '[' && s[j] === ']') || (stack[stack.length-1] === '{' && s[j] === '}')) {
                    stack.pop();
                } else {
                    stack.push(s[j]);
                }
            } else {
                stack.push(s[j]);
            }
        }
        if(stack.length === 0) {
            count += 1;
        }
        
        s = s.slice(1) + s[0];
    }
    return count;
}