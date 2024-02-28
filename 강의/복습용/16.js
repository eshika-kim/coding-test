function solution(str) {
    let answer;
    let strarr = str.split('')
    answer = Array.from(new Set(strarr)).join("")
    return answer;
}
const str = "ksekkset"
console.log(solution("ksekkset"))