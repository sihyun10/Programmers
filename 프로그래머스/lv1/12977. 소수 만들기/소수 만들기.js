// 소수 판별해주는 함수
function isPrime(sum) {
    if(sum === 2) {
        return true;
    }
    for(let i = 2; i <= Math.floor(Math.sqrt(sum)); i++) {
        if(sum % i === 0) {
            return false; 
        }
    }
    return true; 
}


function solution(nums) {
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum) === true) {
                    result += 1;
                }
            }
        }
    }
    return result;
}