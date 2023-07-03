function solution(names) {
  const result = [];
  let group = [];
  
  for (let i = 0; i < names.length; i++) {
    group.push(names[i]);
    
    if (group.length === 5 || i === names.length - 1) {
      result.push(group[0]);
      group = [];
    }
  }
  
  return result;
}
