// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
// substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
// ex) "수박".repeat(3) 하면 '수박수박수박' 이 출력되므로 substring()메소드를 활용해, (0,3)까지의 문자열을 반환하여 '수박수' 만 출력되도록 한다.

function solution(n) {
    return "수박".repeat(n).substring(0,n)
}