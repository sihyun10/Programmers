// 대소문자 구분없이 비교하고 싶을때, toUpperCase() 또는 toLowerCase() 메서드를 사용하여 대문자 또는 소문자로 변환.
// String.indexOf(): 문자열에 어떤 문자열이 포함되어있는지 확인. 존재하지 않는다면 -1를 리턴
//풀이방법 => 1) 일단 myString과 pat 문자열을 toLowerCase()를 통해, 소문자로 맞춰준다. 2) .indexOf()를 통해 pat 문자열이 포함되어있는지 확인 후, 포함되어있다면 return 1을 아니면 0을 반환한다.

function solution(myString, pat) {
    let re_myString = myString.toLowerCase();
    let re_pat = pat.toLowerCase();
    
    if(re_myString.indexOf(re_pat) != -1) {
        return 1;
    } else {
        return 0;
    }
}