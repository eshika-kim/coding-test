// 연습
function solution(n, arr) {
    let answer = 0;
    const ch = Array.from({length: n + 1}, () => 0)
    const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0))
    const path = []
    // 인접행렬 그래프로 생성
    for(let [a, b] of arr) {
        graph[a][b] = 1;
    }
    // 행렬 깊이 탐색
    function DFS(v) {
        if( v === n ) { // 정점이 5 즉, n으로 도달했을 경우
            answer ++;
            console.log(path)
        }
        else {
            for(let i = 1; i <= n; i++ ) {
                if(ch[i] === 0 && graph[v][i] === 1) { // 갔다온 적이 없어야 하고, 인접행렬이 존재한다면
                    ch[i] = 1; // 갔다 온 node는 체크하기
                    path.push(i)
                    DFS(i);
                    ch[i] = 0;
                    path.pop();
                }
                
            }
        }
    }
    ch[1] = 1; // 항상 1번은 시작점이므로 1번으로 되돌아갈 수 없게 한다.
    DFS(1);
    return answer;
}

const arr = [
    [1, 2], [1, 3], [1, 4], 
    [2, 1], [2, 3], [2, 5], 
    [3, 4], [4, 2], [4, 5]
]
console.log(solution(5, arr)) // 6