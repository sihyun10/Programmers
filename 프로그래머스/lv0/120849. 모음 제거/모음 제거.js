// 영어 모음 : a, e, i, o, u
// 정규표현식 str_text.replace(/찾을 문자열/gi, "변경할 문자열")
// g : 전체 모든 문자열 변경 (global) , i : 영문 대소문자를 무시, 모두 일치하는 패턴 검색 (ignore)

function solution(my_string) {
    return my_string.replace(/[aeiou]/gi, "");
}