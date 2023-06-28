// 풀이방법
// 1) 문자열을 배열로 변환 _ 스프레드 연산자(...)
// 2) 배열의 요소들에 대해서 순서를 바꾸기 _ splice() 사용 [배열명].splice([삭제위치], [삭제갯수], [추가할 항목]) 즉 splice의 return값은 삭제한 요소들의 array이다.
// 3) 배열을 문자열로 변환 _ join()함수 사용 ex) [배열명].join('')

function solution(my_string, num1, num2) {
    const arr = [...my_string];
    let item = arr.splice(num1, 1, arr[num2]);
    arr.splice(num2,1,item[0]);
    return arr.join('');
}

// arr의 num1번째 위치부터 1개를 삭제한 값을 array 형식으로 담고 arr[num2]인 값을 추가해준다.
// num2번째 위치부터 1개의 값을 삭제하고 item[0]을 추가해준다.