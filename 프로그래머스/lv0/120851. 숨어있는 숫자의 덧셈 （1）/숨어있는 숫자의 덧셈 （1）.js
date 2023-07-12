function solution(my_string) {
    const replace = my_string.replace(/[a-zA-Z]/g, ''); // 문자열에서 알파벳 다 제거
    const result = replace.split('').map(Number); // 배열로 분할
    return result.reduce((sum,num)=> sum+num, 0); // 화살표
}