// 풀이방법 (마지막 원소값 : num_list.length-1)
// 마지막 원소 > 그전 원소 : 마지막 원소 - 그전 원소를 뺀 값
// 마지막 원소 < 그전 원소 : 마지막 원소 * 2

function solution(num_list) {
    const last_num = num_list[num_list.length-1];
    const before_num = num_list[num_list.length-2];
    
    if(last_num > before_num) {
        let a = last_num - before_num;
        num_list.push(a);
    } else {
        let b = last_num * 2;
        num_list.push(b);
    }
    return num_list;
}