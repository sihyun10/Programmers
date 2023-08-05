function solution(sides) {
    let minValue = Math.min(...sides);
    let maxValue = Math.max(...sides);
    let a = maxValue - minValue + 1;
    let b = maxValue + 1;
    let result = [];

    // maxValue < minValue + x
    while (a <= maxValue) {
        a++;
        result.push(a);
    }

    // maxValue + minValue > x
    while (b < maxValue + minValue) {
        b++;
        result.push(b);
    }
    return result.length;
}