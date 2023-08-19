// 스택을 사용해, 서로 짝을 찾아 제거한 뒤 남은 문자열을 처리한다.

function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    if(stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}