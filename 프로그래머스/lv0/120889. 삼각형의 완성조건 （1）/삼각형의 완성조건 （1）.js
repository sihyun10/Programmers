function solution(sides) {
    sides.sort((a,b) => b - a); // 내림차순 정렬
    return (sides[0] < sides[1] + sides[2] ? 1 : 2); // 삼항연산자 사용
}