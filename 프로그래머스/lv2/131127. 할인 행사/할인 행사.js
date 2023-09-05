function solution(want, number, discount) {
    const obj = {};
    
    // 원하는 제품(want), 제품의 수량(number)를 합친 객체 생성
    for (let i = 0; i < want.length; i++) {
        obj[want[i]] = number[i];
    }
    
    let totalNumber = 0; // 모두 할인 받을 수 있는 회원등록 날짜의 총 일수
    
    for (let j = 0; j < discount.length; j++) {
        if (want.includes(discount[j]) === true) {
            const test = discount.slice(j, j + 10); // 10일 자르기
            let check = true; // 10일 동안의 할인이 가능한지 여부를 판단
            
            for (let j = 0; j < want.length; j++) {
                const count = test.filter((el) => el === want[j]).length;
                if (obj[want[j]] !== count) {
                    check = false;
                    break;
                }
            }
            if (check === true) {
                totalNumber += 1;
            }
        }
    }
    return totalNumber;
}