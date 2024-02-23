// 조합 구하기
// 1~N 중 M개를 뽑는 방법의 수

function solution(n, m) {
    let answer = [];
    const tmp = Array.from({length:m}, () => 0) // 뽑기 기록
    function DFS(L, S) {
        if(L === m) {
            answer.push(tmp.slice())
        }
        else {
            for(let i = S; i <= n; i++) {
                tmp[L] = i
                DFS(L + 1, i + 1)
            }
        }
    }
    DFS(0, 1)
    return answer;
}
console.log(solution(4, 2))