// 치환할거가 여러개인경우, string.replace(/찾고 싶은 문자1 | 찾고 싶은 문자2 | 찾고 싶은 문자3/g , '원하는 치환 조건')
// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별.

function solution(myString, pat) {
    const replace_String = myString.replace(/A/g, 'C').replace(/B/g, 'A').replace(/C/g, 'B');
    
    return (replace_String.includes(pat) ? 1 : 0);
}

// 조건 (삼항) 연산자는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다. 앞에서부터 조건문, 물음표(?), 조건문이 참(truthy)일 경우 실행할 표현식, 콜론(:), 조건문이 거짓(falsy)일 경우 실행할 표현식이 배치됩니다. 해당 연산자는 if...else문의 대체재로 빈번히 사용됩니다.