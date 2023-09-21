// 배열의 값 순서 바꾸기 
// ex) ES6 문법 사용 (Array destructuring) - 하지만 이 코드 '시간초과'로 통과가 안됨.
// 원인) indexOf 메서드는 매번 배열을 순회하면서 값을 찾기때문에 효율적이지 않다.
// function solution(players, callings) {
//     for(let i = 0; i < callings.length; i++) {
//         const changeIndex = players.indexOf(callings[i]);
//         [players[changeIndex-1], players[changeIndex]] = [players[changeIndex], players[changeIndex-1]];
//     }
//     return players;
// }


function solution(players, callings) {
    const playerPositions = {}; // 객체에 선수이름 key, 현재 위치 값으로 저장
    // 현재 선수들의 위치를 저장한다.
    for (let i = 0; i < players.length; i++) {
        playerPositions[players[i]] = i; 
    }

    for (let i = 0; i < callings.length; i++) {
        const callingPlayer = callings[i];
        const currentIndex = playerPositions[callingPlayer];
        const priorPlayer = players[currentIndex - 1];
        
        [players[currentIndex], players[currentIndex - 1]] = [players[currentIndex - 1], players[currentIndex]];
        
        playerPositions[callingPlayer] = currentIndex - 1;
        playerPositions[priorPlayer] = currentIndex
    }
    return players;
}
