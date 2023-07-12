// 문자열을 모두 대문자로 변경 toUpperCase(), 소문자로 변경 toLowerCase()

function solution(my_string) {
    let result = [];
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toLowerCase()) {
            result.push(my_string[i].toUpperCase());
        } else {
            result.push(my_string[i].toLowerCase());
        }
    } 
    return result.join('');
}