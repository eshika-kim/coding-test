// 조합의 경우수(메모이제이션)
// 시간복잡도를 낮춰주는 역할
// 이미 겪은 조합 경우의 수를 미리 저장하여 그 경우의 수가 저장되어있다면
// 저장된 수를 return해주어 연산을 줄여준다
function solution(n, r) {
    let answer;
    let dy = Array.from(Array(35), ()=> Array(35).fill(0))
    function DFS(n, r) {
        if(dy[n][r] > 0) return dy[n][r]
        if( r === 0 || n === r) return 1
        else return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r)
    }
    answer = DFS(n, r)
    return answer
}
console.log(solution(33, 19))