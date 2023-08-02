function solution(spell, dic) {
    for (let i = 0; i < dic.length; i++) {
        let isMissing = false; // spell에 해당하는 문자를 모두 사용한 여부
        for (let j = 0; j < spell.length; j++) {
            if (!dic[i].includes(spell[j])) {
                isMissing = true;
                break;
            }
        }
        if (!isMissing) {
            return 1;
        }
    }
    return 2;
}
