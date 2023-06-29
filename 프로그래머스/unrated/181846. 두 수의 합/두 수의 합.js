// 풀이방법
// 문제발생) 숫자 범위 제한이 발생함. ex) a= "18446744073709551615", b= "287346502836570928366" 이 두 숫자를 합치는게 안된다. 따라서 Bigint이라는 길이 제약 없이 정수를 다를 수 있어 이걸 사용하여 + 연산자를 통해 계산하였다.

function solution(a, b) {
    const bigintA = BigInt(a);
    const bigintB = BigInt(b);
    const result = bigintA + bigintB;
    return result.toString();
}