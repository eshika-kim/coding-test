// 중복순열 구하기
// 1~N까지 적힌 구슬이 있다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력
function solution(N, M) {
    let answer = [];
    const tmp = Array.from({length:M}, () => 0)
    function DFS(L) {
        if(L === M) {
            answer.push(tmp.slice())
        }
        else {
            for(let i = 1; i <= N; i++) {
                tmp[L] = i
                DFS(L + 1)
            }
        }
    }
    DFS(0)
    return answer
}
console.log(solution(3, 2))
// 2중 for문을 사용하지 않고 DFS를 사용하는 이유?
// => 숫자가 커질 수록 for문도 n중 for문으로 바꿔야하므로 비효율적