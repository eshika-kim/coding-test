// 네트워크
// a <-> b, b <-> c 이면 a <-> c이다.
// 연결방식은 arr[i][j] = 1이고 항상 arr[i][i] = 1
// ex) n = 3(컴퓨터 대수) [[1,1,0],[1,1,0],[0,0,1]]
// 0번컴퓨터는 1번컴퓨터와 연결
// 1번컴퓨터는 0번컴퓨터와 연결
// 2번컴퓨터는 연결X 
// 서로 연결된 네트워크 1개, 연결되지 않은컴퓨터 한대 답은 2
function solution(n, computers) {
    let answer=0;
    const visited = []

    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i, visited, computers)
            answer++;
        }
    }
    return answer;
}

const dfs = (node, visited, computers) => {
    console.log('현재노드',node,'방문기록', visited)
    visited[node] = 1;
    for(let i = 0; i < computers.length; i++) {
        // 해당 방문중인 컴퓨터와 다른 컴퓨터가 연결되어있고 방문한적이없으면
        if(computers[node][i] === 1 && !visited[i])
        // 
        dfs(i, visited, computers)
    }
}
const computers1 = [[1,1,0],[1,1,0],[0,0,1]]
const computers2 = [[1,1,0], [1,1,1], [0,1,1]]
// 0번컴퓨터는 1번과 연결
// 1번컴퓨터는 0번, 2번과 연결
// 2번컴퓨터는 1번과 연결 => 모두 연결되어 있으므로 1개
console.log(solution(3, computers1))
// console.log(solution(3, computers2))