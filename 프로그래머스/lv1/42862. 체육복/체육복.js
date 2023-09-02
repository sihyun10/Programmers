function solution(n, lost, reserve) {
    let sum = n - lost.length;
    // 여벌 체육복을 가져온 학생이 체육복 도난당한경우
    let lostStudent = lost.filter((l) => !reserve.includes(l));
    let realReserve = reserve.filter((r) => !lost.includes(r));
    sum += lost.length - lostStudent.length;
    
    lostStudent.sort((a,b) => a-b);
    
    lostStudent.forEach((c)=>{
        if(realReserve.length===0){
            return sum;
        }
        
        if(realReserve.includes(c-1)){
            realReserve = realReserve.filter((r) => r !== c-1);
            sum += 1;
        } else if(realReserve.includes(c+1)){
            realReserve = realReserve.filter((r) => r !== c+1);
            sum += 1;
        }
    })
    return sum;
}