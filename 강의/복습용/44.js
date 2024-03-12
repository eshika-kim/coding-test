// 프로그래머스 피보나치 수열
// F(2) = F(0) + F(1)
// F(3) = F(1) + F(2)
// F(4) = F(2) + F(3)
// F(n) = F(n-1) + F(n-2)
function solution(n) {
    let result = [];
    for(let i = 0; i <= n; i++) {
        if(i === 0) {
            result.push(0)
        }
        if(i === 1) {
            result.push(1)
        }
        if(i >= 2) {
            let sum = result[i-1] + result[i-2]
            result.push(sum % 1234567)
        }
    }
    let answer = result[n] % 1234567
    return answer;
}

console.log(solution(5))
