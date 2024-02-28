function solution(str) {
    let answer;
    answer = str.replace(/A/g, '#')
    return answer;
}
console.log(solution("BANANA"))