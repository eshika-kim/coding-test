function solution(num) {
    let answer = "";
    const odd = []
    for(let i = 0; i < num.length; i++) {
        if(num[i] % 2 === 1) odd.push(num[i])
    }
    answer += odd.reduce((a, b) => a + b, 0)
    answer += " " + Math.min(...odd)
    return answer;
}
const num = [12, 77, 38, 41, 53, 92, 85]
console.log(solution(num))