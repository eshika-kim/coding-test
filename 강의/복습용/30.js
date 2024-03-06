function solution(s, t) {
    let answer = []
    let p = 1000;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === t) {
            p = 0;
            answer.push(p)
        }
        else {
            p++;
            answer.push(p)
        }
    }
    p = 1000;
    for(let j = s.length - 1; j >= 0; j--) {
        if(s[j] === t) p = 0
        else {
            p ++;
            answer[j] = Math.min(answer[j], p)
        }
    }
    return answer;
}
console.log(solution('teachermode', 'e'))

// function solution() {
//     let answer;

//     return answer;
// }
// console.log(solution())