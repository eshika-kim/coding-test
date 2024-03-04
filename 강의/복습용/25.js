// 3강시작 회문문자열 start
function solution(str) {
    let answer = 'YES';
    let mid = Math.floor(str.length/2)
    let half = ''
    let half2 = ''
    for(let i = 0; i < mid; i++) {
        half += str[i].toUpperCase()
    }
    for(let i = str.length-1; i >= mid; i--) {
        half2 += str[i].toUpperCase()
    }
    if(half !== half2) answer = 'NO'
    return answer;
}
console.log(solution('gooG'))

// function solution() {
//     let answer;

//     return answer;
// }
// console.log(solution())