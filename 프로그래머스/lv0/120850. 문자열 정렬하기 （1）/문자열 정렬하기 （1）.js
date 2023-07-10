function solution(my_string) {
    return my_string.replace(/[a-z]/g, '').split('').map(str => parseInt(str, 10)).sort();
}

// 정규식을 활용하여 모든 소문자 a-z까지 찾아 ''로 수정후, split하여 하나하나 배열안에 담는다. 하지만 배열안에 숫자가 아닌 문자열이 작성되어있으므로 map함수를 통해 숫자로 변환해준다. 그 다음 sort() 함수를 통해 오름차순 정렬한다.