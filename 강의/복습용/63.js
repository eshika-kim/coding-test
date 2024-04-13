function solution(n, costs) {
    const graph = Array.from({length: n}, () => [])
    for(const [a, b, cost] of costs) {
        graph[a].push({node: b, cost})
        graph[b].push({node: a, cost})
    }
    console.log(graph)
    const ch = Array(n).fill(0);
    const queue = [];
    let answer = 0;
    ch[0] = 1; // 0번 노드에서 시작

    // 0번 노드에서 갈 수 있는 노드들을 큐에 추가
    for( const {node, cost} of graph[0]) {
        queue.push({node, cost})
    } // 예저를 보면 두 가지 방법이 있으니 두개가 추가될 것이다.
    
    queue.sort((a, b) => a.cost - b.cost)
    // 큐를 cost로 오름차순 정렬 

    while(queue.length > 0) { //queue 가 비워지면 끝남
        const {node, cost} = queue.shift()
        // 정렬이 되었으므로 항상 작은 비용이 먼저 꺼내진다.
        // 이후에 큐를 방문하면 체크된 다리는 그냥 shift되면서 다음으로 넘어간다.
        // 이미 방문한 노드면 건너뛴다.
        if(ch[node]===1) continue;
        // 방문하지 않았다면 비용을 누적한다.
        answer += cost;
        ch[node] = 1; // 방문을 했으니 체크한다.
        for (const {node: nextNode, cost: nextCost} of graph[node]) {
            if(ch[nextNode]===0) { // 방문 한적 없는 node면 간선 정보를 넣는다.
                queue.push({node: nextNode, cost: nextCost})
                queue.sort((a, b) => a.cost - b.cost)
            }
        }
    }
    return answer;
}

const cost1 = [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]
console.log(solution(4, cost1))