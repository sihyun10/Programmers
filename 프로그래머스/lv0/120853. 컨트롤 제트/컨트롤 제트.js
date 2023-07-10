function solution(s) {
    let substrings = s.split(' ');
    
    let result = 0;
    
    for (let i = 0; i < substrings.length; i++) {
        if (parseInt(substrings[i]) > 0) {
            result += parseInt(substrings[i]);
        } else if (parseInt(substrings[i]) < 0) {
            result += parseInt(substrings[i]);
        } else if (substrings[i] === 'Z') {
            result -= parseInt(substrings[i-1]);
        }
    }
    
    return result;
}