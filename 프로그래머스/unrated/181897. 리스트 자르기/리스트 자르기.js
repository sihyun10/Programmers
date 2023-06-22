function solution(n, slicer, num_list) {    
    if(n===1) {
        var answer = num_list.slice(0, slicer[1]+1);
    } else if(n===2) {
        var answer = num_list.slice(slicer[0]);
    } else if(n===3) {
        var answer = num_list.slice(slicer[0],slicer[1]+1);
    } else {
        let sliced = num_list.slice(slicer[0],slicer[1]+1);
        const step = slicer[2];
        var answer = [];
        for (let i = 0; i< sliced.length; i += step) {
            answer.push(sliced[i]);
        }
    } 
    return answer;
}