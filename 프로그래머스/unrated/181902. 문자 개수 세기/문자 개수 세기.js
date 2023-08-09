function solution(my_string) {
    const result = new Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];
        const code = char.charCodeAt(0); //문자의 아스키 코드 값
        
        if (65 <= code && code <= 90) {
            // A-Z
            result[code - 65]++;
        } else if (97 <= code && code <= 122) {
            // a-z
            result[code - 71]++;
        }
    }
    return result;
}
