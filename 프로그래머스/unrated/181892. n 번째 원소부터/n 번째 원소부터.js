// slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
// ex) const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2)); => ["camel", "duck", "elephant"]

function solution(num_list, n) {    
    return num_list.slice([n-1]);
}