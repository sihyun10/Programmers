// left ~ right 범위의 숫자를 좌표로 변환
// 좌표 공식 사용 => Math.max(Math.floor(num/n), num%n) + 1

function solution(n, left, right) {
    let result = [];
    
    while(left <= right) {
        result.push(Math.max(Math.floor(left/n), left%n) + 1);
        left += 1;
    }
    return result;
}