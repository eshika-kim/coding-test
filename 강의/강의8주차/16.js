function solution(str) {
    const arrset = str.split('')
    let answer = 0;
    for(let i = 1; i < arrset.length; i++) {
        if(arrset[i] === arrset[i - 1]) answer ++;
    }
    return answer
}
console.log(solution('AAABBCCBCAAC'))