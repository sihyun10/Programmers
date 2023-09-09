function solution(n, works) {
    let maxValue = works.sort((a,b) => b-a)[0];
    
    while (n > 0) {
        for(let i = 0; i < works.length; i++) {
            if(maxValue === works[i]) {
                works[i] -= works[i] > 0 ? 1 : 0;
                n -= 1;
            }
            if(!n) {
                break;
            }
        }
        maxValue -= 1;
        if(!maxValue) {
            break;
        }
    }
    return works.reduce((acc, cur) => acc + cur ** 2, 0);
}