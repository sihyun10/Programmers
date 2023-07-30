function solution(chicken) {
    let coupon = 0;
    let freeChicken = 0;

    while (chicken >= 10) {
        coupon += chicken / 10;
        freeChicken += Math.floor(chicken / 10); // 서비스 치킨에 쿠폰 발급된 경우
        chicken = (chicken % 10) + Math.floor(chicken / 10);
    }

    return freeChicken;
}
