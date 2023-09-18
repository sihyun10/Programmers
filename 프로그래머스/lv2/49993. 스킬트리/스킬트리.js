// startsWith() 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
// ex) const str1 = 'Saturday night plans';
// console.log(str1.startsWith('Sat')); // true

function solution(skill, skill_trees) {
    let count = 0;
    for (const skill_tree of skill_trees) {
        const splitSkillTrees = skill_tree.split('').filter(char => skill.includes(char)).join('');
        if (skill.startsWith(splitSkillTrees)) {
            count += 1;
        }
    }
    return count;
}