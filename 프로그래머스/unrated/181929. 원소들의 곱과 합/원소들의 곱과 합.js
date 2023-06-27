function solution(num_list) {
    let sum1 = 1, sum2 = 0;
    for(let i of num_list){
        sum1 *= i; // 모든 원소들의 곱
        sum2 += i; // 모든 원소들의 합
    }
    if(sum1 < Math.pow(sum2,2)) {
        return 1;
    } else if(sum1 > Math.pow(sum2,2)) {
        return 0;
    }
}