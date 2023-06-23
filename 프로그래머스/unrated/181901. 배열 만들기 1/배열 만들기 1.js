// k의 배수가 n보다 작거나 같을때까지 
// 조건에 해당하는 값을 배열에 순차적으로 넣는 법 .push() 함수

function solution(n, k) {
    let values = new Array();
    
    for(let i=1; i <= n; i++) {
        if(i%k === 0) {
            values.push(i);
        }
    }
    return values;
}