function solution(str) {
    let answer = 'NO';
    str = str.toLowerCase().replace(/[^a-z]/g, '')
    if(str.split('').reverse().join('') === str) answer = 'YES'
    return answer;
}
const test = 'found7, time: study; Yduts; emit, 7Dnuof'
console.log(solution(test))

// function solution() {
//     let answer;

//     return answer;
// }
// console.log(solution())