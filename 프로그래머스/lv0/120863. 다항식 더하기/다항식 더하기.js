function solution(polynomial) {
    const arr = polynomial.split(" + ");
    
    let xNum = 0;
    let num = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes('x')) {
            const xReplace = arr[i].replace('x','') || '1';
            xNum += Number(xReplace);
        } else {
            num += Number(arr[i])
        }
    }
    
    let result = [];
    if(xNum > 0) {
        result.push(`${xNum === 1 ? '' : xNum}x`);
    }
    if(num > 0) {
        result.push(num);
    }
    
    return result.join(' + ');
}