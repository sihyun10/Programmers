function solution(my_string, n) {
    // String.prototype.substring() 메소드는 string 객체의 시작 인덱스로부터 종료 인덱스 전까지 문자열의 부분 문자열을 반환함.
    let answer = my_string.substring(0,n);
    return answer;
}