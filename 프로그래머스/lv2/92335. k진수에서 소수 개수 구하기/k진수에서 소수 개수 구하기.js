// 소수 판별해주는 함수
function isPrime(num) {
    if(num <= 1) {
        return false;
    }
    if(num === 2) {
        return true;
    }
  
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    const numbers = n.toString(k).split('0').map(Number);
    
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(isPrime(numbers[i]) === true) {
            result += 1;
        }
    }
    return result;
}