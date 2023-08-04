// 연산자는 +, - 만 존재한다.

function solution(my_string) {
    const arr = my_string.split(' ');
    let result = parseInt(arr[0]);
    for (let i = 1; i < arr.length; i += 2) {
        (arr[i] === "+") ? result += parseInt(arr[i+1]) : result -= parseInt(arr[i+1])
    }
    return result;
}