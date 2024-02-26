// 송아지 찾기
// 움직이는데 한 번으로 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
// 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램 작성
// 송아지는 움직이지 않고 그 자리에 있다.
// 현수의 위치 S, 송아지의 위치 E
function solution(s, e) {
    let answer = 0;
    let ch = Array.from({length: 10001}, () => 0)
    let dis = Array.from({length: 10001}, () => 0)
    let queue = [];
    ch[s] = 1;
    queue.push(s) // 현수의 출발지점 설정
    dis[s] = 0;
    while(queue.length) {
        let x = queue.shift() // 첫 출발좌표
        for(let nx of [x - 1, x + 1, x + 5]) {
            if(nx === e) return dis[x] + 1 // idx 가 0부터 시작이므로
            if(nx > 0 && nx <= 10000 && ch[nx] === 0) { // ch[nx] => 이 좌표를 왔다갔는지 확인, 만약 왔었으면 다시 못돌아가게 반복문 중지시킴
                // nx 좌표는 10001을 넘을 수 없음, 점프는 최소 1회이상
                ch[nx] = 1; // 한번 거쳐간 곳은 못가게 체크한다.
                queue.push(nx) // x의 자식 노드들 push
                dis[nx] = dis[x] + 1 // 좌표에 점프 횟수 기록
            }
        }
    }
    return answer;
}

console.log(solution(5, 14))
console.log(solution(8, 3))