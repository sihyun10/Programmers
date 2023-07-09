function solution(n) {
    let index = 1;
    let result = [];
    
    while (index <= n) {
        if (n % index === 0) {
            result.push(index);
        }
        index += 1;
    }
    return result;
}

// 약수를 구하는 법은 일단, 정수 n을 나누었을때, 나머지값이 0이 되어야한다. (약수는 최대 자기자신이므로, 자기자신의 수만큼 반복하여 나누기를 시킨다.)