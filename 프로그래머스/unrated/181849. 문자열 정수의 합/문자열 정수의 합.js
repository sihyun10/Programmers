// 현재, let split = num_str.split(''); 이렇게 split하면 문자열이 반환된다. 따라서 숫자로 변환 후 더해줘야하므로 문자열 -> 숫자로 변환 : Number() 를 사용해서 계산해준다.

function solution(num_str) {
    const split = num_str.split('');
    let result = 0;
    
    for (let i=0; i < split.length; i++) {
        result += Number(split[i]);
    }
    return result;
}