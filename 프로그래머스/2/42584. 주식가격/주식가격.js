function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const currentIndex = stack.pop();
            answer[currentIndex] = i - currentIndex;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const stackTopIndex = stack.pop();
        answer[stackTopIndex] = prices.length - 1 - stackTopIndex;
    }

    return answer;
}