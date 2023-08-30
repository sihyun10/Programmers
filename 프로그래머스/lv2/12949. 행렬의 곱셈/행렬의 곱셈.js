// ex) (arr1[0][0] * arr2[0][0]) + (arr1[0][1] * arr2[1][0]) = 15
// (arr1[0][1] * arr2[0][1]) + (arr1[0][1] * arr2[1][1]) = 15
// 위의 두값은 answer[0][0] 의 값이 된다. [15,15]

function solution(arr1, arr2) {
    const answer = [];

    for(let i = 0; i < arr1.length; i++) {
        let result = [];
        for(let j = 0; j < arr2[0].length; j++) {
            let eachValue = 0;
            for(let k = 0; k < arr2.length; k++) {
                eachValue += arr1[i][k] * arr2[k][j];
            }
            result.push(eachValue);
        }
        answer.push(result);
    }
    return answer;
}