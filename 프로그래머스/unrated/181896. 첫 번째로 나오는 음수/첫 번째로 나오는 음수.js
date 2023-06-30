// findIndex() 메서드는 제공된 테스트 함수를 충족하는 배열의 첫 번째 요소의 인덱스를 반환합니다. 검정 기능을 만족하는 요소가 없으면 -1이 반환됩니다.
// ES6 문법에 findIndex()라는 새로운 메소드를 Array.prototype에 추가했다. 이를 통해 제공된 테스트 기능을 충족하는 배열의 첫 번째 요소를 찾을 수 있다.

function solution(num_list) {
    const minusNumber = (element) => element < 0;
    return num_list.findIndex(minusNumber);
}