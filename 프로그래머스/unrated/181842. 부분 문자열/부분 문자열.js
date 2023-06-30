// indexOf()는 부분 문자열의 인덱스를 반환하며, 해당 부분 문자열이 존재하지 않을 경우 -1을 반환합니다.

function solution(str1, str2) {
  if (str2.indexOf(str1) !== -1) {
    return 1;
  } else {
    return 0;
  }
}
