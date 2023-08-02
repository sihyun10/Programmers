function solution(myString, pat) {
    const lastIndex = myString.lastIndexOf(pat);
    const patLength = pat.length;
    return myString.slice(0, lastIndex + patLength);
}