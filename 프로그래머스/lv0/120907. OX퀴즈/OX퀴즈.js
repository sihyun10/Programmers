function solution(quiz) {
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        let includes = 0;
        if(calc.includes('+') === true) {
            includes = 1;
        } else {
            includes = -1;
        }
        
        
        const operator = ((includes === 1) ? ' + ' : ' - ');
        const [a, b] = calc.split(operator);
        
        return Number(a) + (Number(b) * includes) === Number(result) ? 'O' : 'X';
    });
}