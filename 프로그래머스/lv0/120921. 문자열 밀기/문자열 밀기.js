function solution(A, B) {
    if (A == B) return 0;
    
    let doubleA = A + A;
    
    if (doubleA.includes(B)) {
        for (let i = 1; i <= A.length; i++) {
            if (doubleA.slice(-i) === B.slice(0, i)) {
                return i;
            }
        }
    }
    return -1;
}
