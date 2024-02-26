// 섬나라 아일랜드 BFS 활용
// queue에 시작점을 shift() 한 후 시작
// 그 다음 이중 for문을 돌면서 주변에 섬을 탐색
// 섬이 걸리면 1을 0으로 바꿔주고 queue에 좌표를 push
// 이 때, queue에 넣기 전에 해당 좌표의 1을 0으로 바꿔주어야 한다.
// queue를 넣은 후 바꿔주면 queue에서 shift()된 좌표의 주변이 또 들어갈 수도 있으므로
// 꼭 queue에 넣기 전에 바꿔주어야 한다.
function solution(board) {
    let answer = 0;
    const queue = [];
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1]
    const dy = [0, 1, 1, 1, 0, -1, -1, -1]
    const n = board.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 1) {
                console.log(i, j)
                board[i][j] = 0
                queue.push([i, j]);
                answer ++;
                while(queue.length) {
                    let [x, y] = queue.shift();
                    console.log(x, y)
                    for(let k = 0; k < 8; k++) {
                        let nx = x + dx[k]
                        let ny = y + dy[k]
                        if( nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny]===1 ) {
                            board[nx][ny] = 0
                            queue.push([nx, ny])
                        }
                    }
                }
                console.log("BFS end")
            }
        }
    }
    return answer;
}

let arr=[
    [1, 1, 0, 0, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]
   ];

console.log(solution(arr));