// lv2 DFS 게임 맵 최단거리
// 예시
// 5 x 5 맵에 내 캐릭터는 [1, 1]에 위치해있고 상대팀은 [5, 5]에 있다.
// 캐릭터는 동,서,남,북으로 한 칸씩 이동하며 길이 아닌곳은 갈 수 없다.
// maps = 게임 맵의 상태 배열(2차원) 1은 갈 수 있는길, 0은 벽
// return = 상대 팀 진영에 도착하는 칸의 개수 최소값
// 도착할 수 없으면 -1 반환
function solution(maps) {
    const dir = [[0, 1],[1, 0],[0, -1],[-1, 0]]
    const n = maps.length;
    const m = maps[0].length;
    const bfs = () => {
        const queue = [[0, 0, 1]];
        maps[0][0] = 0;

        while(queue.length > 0) {
            const [row, col, distance] = queue.shift()

            if(row === n - 1 && col === m - 1) {
                return distance
            }

            for(const [x, y] of dir) {
                let dx = row + x
                let dy = col + y

                if(dx >= 0 && dx < n && dy >= 0 && dy < m && maps[dx][dy] === 1) {
                    queue.push([dx, dy, distance + 1])
                    maps[dx][dy] = 0
                }
            }
        }
        return -1
    }
    return bfs()
}


const map1 = [
    [1,0,1,1,1],
    [1,0,1,0,1],
    [1,0,1,1,1],
    [1,1,1,0,1],
    [0,0,0,0,1]]
const map2 = [
    [1,0,1,1,1],
    [1,0,1,0,1],
    [1,0,1,1,1],
    [1,1,1,0,0],
    [0,0,0,0,1]
]
console.log(solution(map1))
console.log(solution(map2))