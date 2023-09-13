function solution(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    let str1Cut = [];
    for(let i = 0; i < str1.length -1; i++) {
        const pair1 = str1.substring(i,i+2);
        if(pair1.match(/[A-Z]{2}/)) {
            str1Cut.push(pair1);
        }
    }
    
    let str2Cut = [];
    for(let j = 0; j < str2.length -1; j++) {
        const pair2 = str2.substring(j,j+2);
        if(pair2.match(/[A-Z]{2}/)) {
            str2Cut.push(pair2);
        }
    }
    
    let intersection = []; // 교집합
    let union = []; // 합집합
    
    for(let k = 0; k < str2Cut.length; k++) {
        if(str1Cut.indexOf(str2Cut[k]) >= 0) {
            intersection.push(str1Cut.splice(str1Cut.indexOf(str2Cut[k]),1));
        }
        union.push(str2Cut[k]);
    }
    
    for(let l = 0; l < str1Cut.length; l++) {
        union.push(str1Cut[l]);
    }
    
    if(intersection.length === 0 && union.length === 0) {
        return 65536;
    } else {
        return Math.floor((intersection.length / union.length) * 65536);
    }
}