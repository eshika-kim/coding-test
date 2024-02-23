// 경로 탐색(인접 리스트)
// 노드가 많을 경우 메모리가 낭비되고 시간복잡도도 올라가기 때문에
function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array())
    // 노드마다 length가 다르기 때문에 빈 배열 상태로 넣어준다.
    const ch = Array.from({length: n+1}, () => 0)
    const path = [1]
    for(let [a, b] of arr) {
        graph[a].push(b)
    }
    // 그래프 인접행렬 완료
    function DFS(v) {
       if( v === n ) {
            answer ++;
            console.log(path)
       }
       else {
        for(let i = 0; i < graph[v].length; i++) {
            if( ch[graph[v][i]] === 0) {
                ch[graph[v][i]] = 1
                path.push(graph[v][i])
                DFS(graph[v][i])
                ch[graph[v][i]] = 0
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