// function solution(my_string, s, e) {
//     // split() 메서드 : 여러개의 문자열로 이루어진 배열로 분할함.
//     // reverse() 메서드 : 배열을 뒤집음.
//     // join() 메서드 : 배열의 모든 요소를 문자열로 결합.
    
//     var splitString = my_string.split("");
    
//     var reverseArray = [...splitString].reverse(s,e);
    
//     var answer = reverseArray.join("");
    
//     return answer;
// }

function solution(my_string, s, e) {
  // 문자열을 배열로 분할
  var arr = my_string.split('');
  
  // s부터 e까지의 부분 배열을 추출하고 뒤집음
  var subArr = arr.slice(s, e + 1).reverse();
  
  // 뒤집은 부분 배열을 원래 배열에 덮어씌움
  arr.splice(s, subArr.length, ...subArr);
  
  // 배열을 문자열로 변환하여 반환
  return arr.join('');
}