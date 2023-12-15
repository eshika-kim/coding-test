// 피보나치 수열 : 무한한 숫자들의 목록, 이때 각 수는 이전 두 수의 합
// 1, 1, 2, 3, 5, 8, 13, 21, ...
// for 루프 활용법
function getNthFibo(n) {
    if(n <= 1) return n
    let sum = 0;
    let last = 1;
    let lastlast = 0

    for ( let i = 1; i < n; i++) {
        sum = lastlast + last
        lastlast = last
        last = sum
    }
    return sum
}
const answer1 = getNthFibo(8) // 21
// console.log(answer1)
// 재귀 활용법 : N번째 피보나치 수는 (n-1)번째 피보나치수와 (n-2)번째 피보나치 수의 합이다.
// 이러한 구현의 시간 복잡도는 O(2^n)이다.
function getNthFiboRecursion(n) {
    if (n <= 1) return n
    else {
        return getNthFiboRecursion(n - 1) + getNthFiboRecursion(n - 2)
    }
}
const answer2 = getNthFiboRecursion(8) // 21
// console.log(answer2)

// 꼬리 재귀(tail recursion)
// 시간 복잡도 : O(n), 공간복잡도 : O(n)
function getNthFiboTailRecursion(n, lastlast, last) {
    if( n == 0 ) return lastlast
    if( n == 1 ) return last
    return getNthFiboTailRecursion(n-1, last, lastlast + last) 
}
const answer3 = getNthFiboTailRecursion(8, 0, 1) // 21
// console.log(answer3)

// 기저 경우가 해결될 때까지 운영체제의 메모리 스택에 저장되야 한다.
// 공간 복잡도 비용을 지녀 스택 오버플로 오류를 조심해야 함.
