function solution(my_string, n) {
    let result = my_string.substring(my_string.length-n);
    return result;
}

// 문자열 뒤에서 자르는 법 
// substring() 함수를 활용함. 문자열의 시작 인덱스에서 해당하는 크기만큼 출력되는데, 문자열의 길이에서 n을 빼면 그 값에서부터 문자를 출력하기에 이런 방식으로 풀면 된다.