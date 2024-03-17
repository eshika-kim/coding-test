// 콜라츠 수열 만들기
// 자연수 x에 대해 현재값이 x면 x가 짝수일 때는 2로 나누고
// x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는
// x가 1이되는지 묻는 문제
// n이 10일 때 1이 언제되는지 수열을 return하는 함수
// 현재 n = 10 / 2 = 5 [10, 5]
// 3 * 5 + 1 = 16 [10, 5, 16] 16 / 2 = 8 [10, 5, 16, 8] 8/2 = 4 [10, 5, 16, 8, 4]
// 4/2 = 2 2/2 = 1 [10, 5, 16, 8, 4, 2, 1]

function solution(n, arr = []) {
    arr.push(n)
    if(n === 1) return arr
    if(n % 2 === 0) return solution(n / 2, arr)
    return solution(n * 3 + 1, arr)
}
console.log(solution(10))

// function solution(n, arr = []) {
//     arr.push(n)
//     if (n === 1) return arr
//     if (n % 2 === 0) return solution(n / 2, arr)
//     return solution(3 * n + 1, arr)
// }