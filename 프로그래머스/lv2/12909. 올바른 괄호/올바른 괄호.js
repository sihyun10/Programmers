// s값 맨 처음이 ')'로 시작하면 false 반환

function solution(s) {
    let stackCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stackCount += 1;
        } else if (s[i] === ')') {
            if (stackCount === 0) {
                return false;  // stackCount 값이 0일때 ')'이면 false
            }
            stackCount -= 1;
        }
    }
    return stackCount === 0;  // stackCount === 0 이면 true, 아니면 false 반환
}
