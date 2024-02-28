function solution(n) { //  학생 수
    let answer = 0;
    answer = Math.floor(n / 12) + 1
    return answer;
}
console.log(solution(25))
console.log(solution(178))