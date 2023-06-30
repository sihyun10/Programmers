// replace() 함수는 문자열에서 변경하려는 문자열이 여러 번 반복될 경우, 첫 번째로 발견한 문자열만 치환해 줍니다.
// 따라서 정규식으로 찾으려는 문자열은 '/'로 감싸서, 파라미터로 들어가는 값이 정규식 임을 알려줍니다. 그리고, '/' 뒤에는 'g'라는 modifier를 붙여주었습니다. (g는 'global match')

function solution(rny_string) {
    return rny_string.replace(/m/g, 'rn');
}