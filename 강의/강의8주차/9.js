// 동전교환
// 여러 단위의 동전들이 주어져 있을 때 거스름돈을 가장 적은 수의 동전으로
// 교환하는 프로그램
// 각 동전의 종류는 100원을 넘지 않는다.
// N = 동전의 종류 개수, M = 거슬러 줄 금액
function solution(m, arr){
    let answer=Number.MAX_SAFE_INTEGER;
    let n = arr.length;
    function DFS(L, sum) { // L = 동전개수, 누적 금액
        if(sum > m) return
        if(sum === m) {
            answer = Math.min(answer, L)
        }
        else {
            for(let i = 0; i < n; i++) {
                DFS(L + 1, sum + arr[i])
            }
        }
    }
    DFS(0, 0)
    
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));