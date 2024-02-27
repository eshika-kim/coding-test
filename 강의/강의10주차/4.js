// 동전교환 (냅색 알고리즘)
// 여러 단위의 동전들이 주어져 있을 때 거스름돈을 가장 적은 수의 동전으로
// 교환해주려면?
// N = 동전의 종류 개수 (최대 12개)
// M = 거슬러 줄 금액
// 금액이 커지면 DFS로 풀기 어렵다.
// 각 동전의 종류는 100원을 넘지 않는다.
// dy의 의미 
function solution(n, m, coin) {
    let answer = 0;
    const dy = Array.from({length:m + 1}, () => 501)
    dy[0] = 0;
    for(let i = 0; i < n; i++) {
        for(let j = coin[i]; j <= m; j++) {
            dy[j] = Math.min(dy[j], dy[j-coin[i]] + 1)
        }
        console.log(dy)
    }
    
    answer = dy[m]
    return answer
}
const coin = [1, 2, 5]
console.log(solution(3, 15, coin))