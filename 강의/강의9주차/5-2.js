// 생각하면서 bfs 탐색 풀어보기
// 1. 갈 수 있는 길을 queue에 밀어넣는다고 생각하기
// 2. 먼저 1번은 shift하고 시작하기
// 3. while문으로 시작하기
// 4. 멈추는 조건 생각하기 : queue.length가 0일 때, 방법을 찾았을 때 => 어차피 방법을 찾으면 그게 최소조건이므로
// 5. 왔던 길 다시 반복하지 않게 설정하기. distance 배열과 check 배열을 활용하기 

function solution (s, e) {
    const dis = Array.from({length: 10001}, () => 0) // 조건 중 좌표는 1~10,000이다.
    const ch = Array.from({length: 10001}, () => 0) // 해당 좌표를 들렀는지 확인한다.
    const queue = [];
    queue.push(s) // 출발지점 설정
    ch[s] = 1 // 출발지점을 다시 찍는 경우의 수를 방지s
    dis[s] = 0 // 점프횟수 초기화
    while(queue.length) {
        let x = queue.shift() // 최상위 노드 꺼내기
        for(let nx of [x - 1, x + 1, x + 5]) {
            if(nx === e) return dis[x] + 1 // 해당 좌표와 동일해지면 부모노드에 + 1을 해주면 마지막 점프수를 추가해주게된다.
            if( ch[nx] === 0 && nx > 0 && nx <= 10000 ) { // 경우의 수가 체크박스에 없어야하고, nx는 항상 양수, 10,000을 넘기지 않아야한다
                ch[nx] = 1; // 체크박스에 왔던 x좌표 기록
                queue.push(nx) //queue에 자식 노드들 추가
                dis[nx] = dis[x] + 1 // 부모 노드의 점프횟수에 +1을 해서 해당 거리에 점프횟수를 더한다.
            }
        }
    }
}
console.log(solution(5, 14))