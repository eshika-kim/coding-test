// BFS문제를 level단위로 풀어서 해결하기
function solution (s, e) {
    const ch = Array.from({length: 10000}, () => 0)
    const queue = []
    let L = 0;
    queue.push(s)
    while(queue.length) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let x = queue.shift()
            for(let nx of [x - 1, x + 1, x + 5]) {
                if(nx === e) return L + 1
                if(nx > 0 && nx <= 10000 && ch[nx] === 0) {
                    ch[nx] = 1;
                    queue.push(nx);
                }
            }
        }
        L ++
    }
}
console.log(solution(5, 14))