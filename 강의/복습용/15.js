function solution(str) {
    let answer = "";
    if(str.length % 2 === 1) answer = str[Math.ceil(str.length / 2) - 1]
    else answer = str[str.length / 2 - 1] + str[str.length / 2]
    return answer;
}
const str = "study"
const str2 = "good"
console.log(solution(str))
console.log(solution(str2))