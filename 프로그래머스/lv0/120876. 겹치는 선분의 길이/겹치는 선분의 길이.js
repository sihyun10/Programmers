function solution(lines) {
    const [line1, line2, line3] = lines;
    const [start1, end1] = line1;
    const [start2, end2] = line2;
    const [start3, end3] = line3;

    const start = Math.min(start1, start2, start3);
    const end = Math.max(end1, end2, end3);
    const fill = [...Array(end-start)].fill(0);
    lines.forEach(a => {
        for(let i = a[0]; i < a[1]; i++) {
            fill[i-start] += 1;
        }
    });
    
    return fill.reduce((acc,curr) => {
        if(curr > 1) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0)
}