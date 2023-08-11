function solution(number, limit, power) {
    let ironWeight = 0;

    for(let i = 1; i <= number; i++) {
        let factors = [];
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                factors.push(j);
                if(i / j !== j) {
                    factors.push(i / j);
                }
            }
        }
        let attack = factors.length;
        if (attack > limit) {
            attack = power;
        }
        ironWeight += attack;
    }
    return ironWeight;
}
