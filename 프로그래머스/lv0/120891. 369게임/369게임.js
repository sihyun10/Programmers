// match() : 문자열이 정규식과 매치되는 부분 검색
// +) 예외상황을 생각하지 못했다. 3,6,9가 안나올때엔 0을 반환하도록 하여야한다.

function solution(order) {
    const result = order.toString().match(/[369]/g);
    return (result === null) ? 0 : result.length;
}