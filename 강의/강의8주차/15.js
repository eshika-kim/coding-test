// 수들의 조합
// N개의 정수가 주어지면 그 수 중 K개를 뽑는 조합의 합이
// 임의의 정수 M의 배수인 개수는 몇 개가 있는지 출력
// 3 <= N <= 20, 2 <= K <= N
// 직접 푼 답
function solution(k, arr, m) {
    let answer = 0;
    const combi = []
    let tmp = Array.from({length:k}, () => 0)
    function DFS(L, S) {
        if(L === k) {
            combi.push(tmp.slice())
        }
        else {
            for(let i = S; i < arr.length; i++) {
                tmp[L] = arr[i]
                DFS(L + 1, i + 1)
            }
        }
    }
    DFS(0, 0)
    let sum = []
    combi.forEach((a) => {
        sum.push(a.reduce((a, b) => a + b, 0))
    })
    for(let x of sum) {
        if( (x % m) === 0) {
            console.log(x)
            answer ++
        }
    }
    return answer;
} 
const arr = [2, 4, 5, 8, 12]
console.log(solution(3, arr, 6))

// 우선 n개의 정수를 k개 뽑는 조합을 구한다.