function solution(myString) {
  let result = '';
    
  for (let i = 0; i < myString.length; i++) {
    if (myString[i].toLowerCase() === 'a') {
      result += 'A';
    } else {
      result += myString[i].toLowerCase();
    }
  }

  return result;
}
