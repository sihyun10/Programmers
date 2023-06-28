// 실수(Float)를 정수(Integer)로 변환하는 3가지 방법
// 1) parseInt() : 문자열을 인자로 받고, Number 타입으로 변환, 2) .toFixed() : 소수점 이하 숫자를 버리고 정수만 리턴. String 타입에서는 사용할 수 없다. 3) Math 함수들 사용 _ Math.trunc(), floor(), round(), ceil()

function solution(flo) {
    return parseInt(flo);
}
