// n이 홀수면 n이하의 수 모든 합
// n이 짝수면 n이하의 수 모든 제곱의 합

function solution(n) {
    let sum = []
    
    if(n % 2 == 1) {
        for (let i = 1; i <= n; i++) {
            if(i % 2 == 1) {
                sum.push(i)
            }
        }
    }
    
    if(n % 2 == 0) {
        for (let i = 2; i <=n; i++) {
            if(i % 2 == 0) {
                sum.push(i**2)
            }
        }
    }
    const answer = sum.reduce((acc,idx)=> acc + idx)
    return answer;
}

const odd = 7 // result : 16
const even = 10 // result : 220
const a1 = solution(odd)
const a2 = solution(even)
console.log(a1)
console.log(a2)