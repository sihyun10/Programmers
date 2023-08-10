function solution(rank, attendance) {
    let index = [];
    for(let i = 0; i < attendance.length; i++) {
        if(attendance[i] === true) {
            index.push(i);
        }
    }
    
    let rankValue = [];
    for(let j = 0; j < index.length; j++) {
        rankValue.push(rank[index[j]]);
    }
    rankValue.sort((a,b)=> a-b);
    
    return 10000 * (rank.indexOf(rankValue[0])) + 100 * (rank.indexOf(rankValue[1])) + (rank.indexOf(rankValue[2]));
}

// true에 해당하는 rank 인덱스를 다 추출
// rank 인덱스 값들을 비교 후 오름차순.
// 그 값에 따른 인덱스를 a, b, c에 넣기.
// return 10000 × a + 100 × b + c