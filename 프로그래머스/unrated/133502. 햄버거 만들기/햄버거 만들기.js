function solution(ingredient) {
    const stack = [];
    let count = 0;

    for(const item of ingredient) {
        stack.push(item);
        
        // stack의 마지막 4개의 요소가 '1231'이면 그값을 삭제후, count += 1 한다.
        if (stack.slice(stack.length - 4).join('') === '1231') {
            stack.splice(stack.length - 4);
            count += 1;
        }
    }
    return count;
}