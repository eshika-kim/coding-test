// 경로 탐색(인접 행렬)  graph + DFS
// 방향 그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의
// 가지 수를 출력하는 프로그램을 작성
function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0))
    // 1번 index부터 사용하기 위해
    const ch = Array.from({length: n+1}, () => 0)
    let path = []
    for(let [a, b] of arr) {
        graph[a][b] = 1;
    }
    // 그래프 인접행렬 완료
    function DFS(v) {
        if(v === n ) {
            answer ++;
            console.log(path)
        }
        else {
            for(let i = 1; i <= n; i++) {
                if(graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    path.push(i)
                    DFS(i)
                    ch[i] = 0;
                    path.pop()
                }
            }
        }
    }
    ch[1] = 1; // 1부터 항상 시작하기 때문에 체크해주어야 한다.
    DFS(1);
    return answer;
}

const arr = [
    [1, 2], [1, 3], [1, 4], 
    [2, 1], [2, 3], [2, 5], 
    [3, 4], [4, 2], [4, 5]
]
console.log(solution(5, arr)) // 6