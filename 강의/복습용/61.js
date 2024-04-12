// 경로탐색(인접 행렬)

function solution(n, arr) {
    let answer=0;
    const graph = Array.from(Array(n+1), ()=> Array(n+1).fill(0))
    const ch = Array.from({length:n+1}, ()=> 0)
    for(let [a, b] of arr) {
        graph[a][b] = 1; // 갔다온걸 체크해줌
    }

    function DFS(v) {
        if(v===n) {
            answer++;
        } else {
            for(let i = 1; i <=n; i++) {
                if(graph[v][i]===1 && ch[i] === 0) {
                    // 해당 경로를 갈 수 있는 방법이 있고 (graph[v][i] === 1)
                    // 해당 노드를 간적이 없다면
                    ch[i] = 1
                    console.log('경로탐색 체크', i)
                    DFS(i)
                    ch[i] = 0
                    console.log('경로탐색 해제', i)
                } 
            }
        }
    }

    DFS(1)
    return answer;
}

const arrTest = [
    [1, 2], [1, 3], [1, 4], 
    [2, 1], [2, 3], [2, 5], 
    [3, 4], [4, 2], [4, 5]
    ];

console.log(solution(5, arrTest))