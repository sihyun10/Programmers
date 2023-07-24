function solution(name, yearning, photo) {
    // name과 yearning 두 배열을 하나의 object(객체)로 합침
    const nameAndyearning = name.reduce((acc, curr, idx) => {
        acc[curr] = yearning[idx];
        return acc;
    }, new Object);
    
    return photo.map(persons => persons.reduce((acc, person) => acc + (nameAndyearning[person] || 0), 0));
}