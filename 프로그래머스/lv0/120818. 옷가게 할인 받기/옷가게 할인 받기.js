function solution(price) {
    // if (price >= 500000) {
    //     return price * 0.8;
    // } else if (price >= 300000) {
    //     return price * 0.9;
    // } else if (price >= 100000) {
    //     return price * 0.95;
    // }
    
    return price >= 500000 ? Math.floor(price * 0.8) : price >= 300000 ? Math.floor(price * 0.9) : price >= 100000 ? Math.floor(price * 0.95) : price;
}