function solution(picture, k) {
    const willAddArr = [];
    // str = 가로로 k배로 늘린 문자열
    for(let i = 0; i < picture.length; i++) {
        let str = '';
        for(let j = 0; j < picture[i].length; j++) {
            for(let l = 0; l < k; l++) {
                str += picture[i][j];    
            }
        }
        willAddArr.push(str);
    }
    
    // 세로로 k배 늘리기
    return willAddArr.reduce((acc, cur) => {
        const curArr = []
        for(let i = 0; i < k; i++) {
            curArr.push(cur);
        }
        return [...acc, ...curArr];
    }, [])
}