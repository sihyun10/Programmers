function solution(cipher, code) {
    const length = cipher.length;
    let result = [];
    
    for (let i = 0; i < cipher.length; i ++) {
        if (code * (i + 1) <= length) {
            result.push(cipher[code * (i + 1) - 1]);
        } else {
            break;
        }
    }
    
    return result.join('');
}