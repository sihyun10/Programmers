// 유클리드 호제법 활용
// 최대 공약수
let getGCD = (num1, num2) => {
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 
    return num1;
}

// 최소 공배수
const lcm = (a, b) => a * b / getGCD(a, b);

const solution = (arr) => {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result = lcm(result, arr[i]);
    }
    return result;
};