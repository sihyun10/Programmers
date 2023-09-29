function solution(numbers, target) {
    let answer = 0;
    const stack = [{ num: 0, count: 0 }];

    while (stack.length > 0) {
        const { num, count } = stack.pop();
        if (count === numbers.length) {
            if (num === target) {
                answer += 1;
            }
        } else {
            stack.push({ num: num + numbers[count], count: count + 1 });
            stack.push({ num: num - numbers[count], count: count + 1 });
        }
    }
    return answer;
}