function solution(dots) {
    let result = 0;

    function incline(a, b, c, d) {
        let abDiff = (b[1] - a[1]) / (b[0] - a[0]); // ab 기울기
        let cdDiff = (d[1] - c[1]) / (d[0] - c[0]); // cd 기울기
        
        // ab, cd 기울기가 같으면 평행한 경우
        if (abDiff === cdDiff) {
            result += 1;
        }
    }

    // (1,2), (3,4)
    incline(dots[0], dots[1], dots[2], dots[3]);

    // (1,3), (2,4)
    incline(dots[0], dots[2], dots[1], dots[3]);


    // (1,4), (2,3)
    incline(dots[0], dots[3], dots[1], dots[2]);

    return result > 0 ? 1 : 0;
}