function solution(lottos, win_nums) {
    const zeroCount = lottos.filter((element) => element === 0).length;
    const matchCount = lottos.filter((element) => win_nums.includes(element)).length;
    
    // 최고 순위
    let highestRank = 0;
    if(zeroCount + matchCount >= 2) {
        highestRank = 7 - (zeroCount + matchCount);
    } else {
        highestRank = 6;
    }
    
    // 최저 순위
    let lowestRank = 0;
    if(matchCount >= 2) {
        lowestRank = 7 - matchCount;
    } else {
        lowestRank = 6;
    }

    return [highestRank, lowestRank];
}