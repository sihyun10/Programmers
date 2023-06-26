function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    const numA = Number(a);
    const numB = Number(b);
    
    if (op === "+") {
        return numA + numB;
    } else if (op === "-") {
        return numA - numB;
    } else if (op === "*") {
        return numA * numB;
    }
}