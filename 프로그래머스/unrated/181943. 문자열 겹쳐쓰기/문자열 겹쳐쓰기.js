function solution(my_string, overwrite_string, s) {
  const previous = my_string.slice(0, s); // s 이전 문자열을 잘라냄
  const subsequent = my_string.slice(s + overwrite_string.length); // s + overwrite_string.length 이후 문자열을 잘라냄
  return previous + overwrite_string + subsequent;
}
