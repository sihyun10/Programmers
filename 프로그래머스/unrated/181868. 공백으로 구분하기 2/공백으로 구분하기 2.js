function solution(my_string) {
    // 문자열 앞뒤 공백 제거
    const trimStr = my_string.trim();
    // 문자열 한칸 이상 공백을 한칸 공백으로 치환
    let newStr = trimStr.replace(/\s{2,}/gi, ' ');
    let arr = newStr.split(' ');
    return arr;
}
