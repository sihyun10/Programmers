function solution(s) {
    const result = [];
    const positions = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in positions) {
            result.push(i - positions[char]);
        } else {
            result.push(-1);
        }
        positions[char] = i;
    }
    return result;
}