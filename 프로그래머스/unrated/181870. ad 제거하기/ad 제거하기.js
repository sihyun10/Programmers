function solution(strArr) {
    for (let i = strArr.length - 1; i >= 0; i--) {
        if (strArr[i].indexOf("ad") !== -1) {
            strArr.splice(i, 1);
        }
    }
    return strArr;
}

// 배열의 요소를 제거할때 앞에서부터 하면은 인덱스가 변경되어 오류가 발생할 수 있기 때문에 뒤에서부터 순차적으로 "ad" 문자열을 포함하고 있는 거를 제거해나간다.