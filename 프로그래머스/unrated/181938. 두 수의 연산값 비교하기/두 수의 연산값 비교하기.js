function solution(a, b) {
    if(Number(a.toString()+b.toString()) >= 2*a*b) {
        return Number(a.toString()+b.toString());
    } else {
        return 2*a*b;
    }
}

// Number(a.toString()+b.toString())
// a b 두 정수를 붙이기위해선 string으로 변환 후 더해줘야한다. 그 후 다시 Number형식으로 바꿔야하기에 이렇게 코드를 작성해주었다.