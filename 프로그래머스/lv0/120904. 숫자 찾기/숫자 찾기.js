// 문자열에서 특정 위치 찾기 : indexOf(); 따라서 num은 숫자이므로 일단, String으로 바꿔준다. 그 다음 indexOf()를 통해 특정 위치 찾는다.

function solution(num, k) {
    num = num.toString();
    let index = num.indexOf(k);
    return (index != -1) ? num.indexOf(k) + 1 : num.indexOf(k);
}
