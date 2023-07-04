function solution(x1, x2, x3, x4) {
    return (x1 || x2) && (x3 || x4);
}

// 자바스크립트 논리 연산자는 값을 True , False 로 반환한다. || 연산자는 둘 중 하나만 True 여도 전체를 True 반환. && 연산자는 둘 다 True 이면, 전체를 True 로 반환.