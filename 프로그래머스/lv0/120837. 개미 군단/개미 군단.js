function solution(hp) {
    const general= Math.floor(hp / 5);
    const soldier = Math.floor((hp % 5) / 3);
    const worker = Math.floor((hp % 5) % 3 / 1);
    
    return general + soldier + worker;
}