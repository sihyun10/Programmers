// Cashe miss : 해야할 작업이 캐시에 없는 상태.
// Cashe Hit : 해야할 작업이 캐시에 있는 상태.

function solution(cacheSize, cities) {
    cities = cities.map(city => city.toLowerCase()); // 모두 소문자로 변환
    
    let time = 0;
    const cache = [];
    
    if (cacheSize === 0) {
        return 5 * cities.length;
    } else {
        for (let i = 0; i < cities.length; i++) {
            const city = cities[i];

            if (cache.includes(city) === true) {
                const index = cache.indexOf(city);
                cache.splice(index, 1);
                time += 1;
            } else {
                if (cache.length >= cacheSize) {
                    cache.shift();
                }
                time += 5;
            }
            cache.push(city);
        }
    }
    return time;
}
