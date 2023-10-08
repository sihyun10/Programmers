function solution(X, Y) {
    const countX = {};
    const countY = {};
    
    for (const number of X) {
        countX[number] = (countX[number] || 0) + 1;
    }
    
    for (const number of Y) {
        countY[number] = (countY[number] || 0) + 1;
    }
    
    const commonNumbers = []; // 공통 숫자들
    
    for (const number in countX) {
        if (number in countX && number in countY) {
            const commonCount = Math.min(countX[number], countY[number]);
            for (let i = 0; i < commonCount; i++) {
                commonNumbers.push(number);
            }
        }
    }
    
    commonNumbers.sort((a, b) => b - a);
    
    if (commonNumbers.length === 0) {
        return "-1";
    } else if (commonNumbers.every(num => num === "0")) {
        return "0";
    } else {
        return commonNumbers.join("");
    }
}