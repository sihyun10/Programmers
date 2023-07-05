// 문자열을 특정 구분자로 분할하기 위해서는 split 함수를 사용

function solution(myString) {
    myString = myString.split('x');
    let result = [];
    
    for (let i = 0; i < myString.length; i++) {
        result.push(myString[i].length);
    }
    
    return result;
}
