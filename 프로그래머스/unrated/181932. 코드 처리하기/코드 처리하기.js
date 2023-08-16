function solution(code) {
    let mode = 0
    return [...code].reduce((acc, cur, idx) => {
        if(mode === 0) {
            if(cur !== '1' && idx % 2 === 0) {
                return acc + cur;
            }
            if(cur === '1') {
                mode = 1;
            }
        } else if (mode === 1) {
            if(cur !== '1' && idx % 2 !== 0) {
                return acc + cur;
            }
            if(cur === '1') {
                mode = 0;
            }
        }
        return acc;
    }, '') || "EMPTY";
}