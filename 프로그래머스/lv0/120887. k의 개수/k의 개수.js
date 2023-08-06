function solution(i, j, k) {
    let a ='';
    
    for(let num = i; num <= j; num++) {
        a += num;
    }
	return a.split(k).length-1;
}