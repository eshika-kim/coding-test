// 분수의 덧셈
function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    function GCD(a, b) {
        return b === 0 ? a : GCD(b, a % b)
    }
    let denom = denom1 * denom2
    let numer = numer1 * denom2 + numer2 * denom1;
    let gcd = GCD(denom, numer)
    answer.push(numer/gcd, denom/gcd)
    return answer;
}

console.log(solution(1, 2, 3, 4)) // [5, 4]
// 최대공약수를 활용한 문제
// 최대공약수는 서로를 나누고 나머지 값을 활용하여 0이 될때까지 나누면
// 찾을 수있다.
// 예시로 18과 27이 있다.
// GCD(27, 18) = 27 / 18 = 1 * 18 + 9 이다
// 그렇다면 GCD(27, 18) = GCD(18, 9)
// GCD(18, 9) = 2 * 9 + 0 이다.
// 그렇다면 GCD(18, 9) = GCD(9, 0) 이다.
// 여기서 나눌 몫이 0이되면 중지하고 9가 최대공약수가 된다. 