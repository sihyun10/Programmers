function solution(files) {
    return files.sort((fileA, fileB) => {
        // (\D+) HEAD 부분, (\d+) NUMBER 부분, (.*) TAIL 부분
        const regex = /(\D+)(\d+)(.*)/i;
        const matchA = fileA.match(regex);
        const matchB = fileB.match(regex);
    
        const headA = matchA[1].toLowerCase();
        const headB = matchB[1].toLowerCase();
    
        if (headA < headB) return -1;
        if (headA > headB) return 1;
    
        const numA = parseInt(matchA[2]);
        const numB = parseInt(matchB[2]);
    
        if (numA < numB) return -1;
        if (numA > numB) return 1;
    
        return 0;
  });
}
