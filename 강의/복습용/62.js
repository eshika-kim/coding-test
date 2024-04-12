function solution(n, costs) {
    let answer = 0
    const graph = Array.from(Array(n+1), () => Array(n+1).fill(0))
    const ch = Array.from({length:n+1}, () => 0)
    const sum = []

    // graph는 통행할 수 있는 다리의 연결점을 표현
    for(const [a, b] of costs) {
        graph[a][b] = 1
    }
    
    function DFS(L, cost) {
        if(L === n-1) {

        } else {
            for(let i = 0; i < n - 1; i++) {
                if(graph[L][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    DFS(i, cost + costs[L][i])
                    ch[i] = 0;
                }
            }
        }
    }

    DFS(1,0)
    return answer;
}

const cost1 = [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]
console.log(solution(4, cost1))