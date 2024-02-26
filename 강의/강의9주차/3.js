// 미로탐색
// 7 * 7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성
// 출발점은 (1, 1) 좌표이고, 도착점은 (7, 7) 이다.
// 격자판의 1은 벽이고, 0은 통로이고 움직임은 상하좌우로만 움직인다.
function solution (arr) {
    let answer = 0;
    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1] // 12시부터 시작해서 시계방향으로 움직이는 좌표

    function DFS(x, y) {
        if( x === 6 && y === 6 ) answer ++;
        else {
           for(let i = 0; i < 4; i++) {
                let nx = x + dx[i]
                let ny = y + dy[i]
                if(nx >= 0 && nx <= 6 && ny <= 6 && nx >= 0 && ny >= 0 && arr[nx][ny] === 0) {
                    arr[nx][ny] = 1;
                    DFS(nx, ny);
                    arr[nx][ny] = 0;
                }
           } 
        }
    }
    arr[0][0] = 1; // 항상 시작점은 넘어가야 한다.
    DFS(0, 0)
    return answer;
}


let arr=[
        [0, 0, 0, 0, 0, 0, 0], 
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0]
    ];

console.log(solution(arr));