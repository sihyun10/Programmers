// 홀수인경우, n+1 / 2 (중앙값구하는법)
// 1) 먼저 오름차순 ex) .sort((a,b)=>(a-b));

function solution(array) {
    array.sort((a,b)=>a-b);
    const index = (array.length + 1) / 2
    return array[index-1];
}