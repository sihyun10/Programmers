// Math.floor : 소수점 버림

function solution(s) {
    const length = s.length;
    if (length % 2 !== 0) {
        return s[Math.floor(length / 2)];
    } else {
        return s[(length / 2) -1] + s[length / 2];
    }
}