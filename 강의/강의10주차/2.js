// 돌다리 건너기
// 개울은 N개의 돌로 된 다리가 있다.
// 철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩
// 건너뛸 수 있다. 개울을 건너는 방법은?
function solution(n) {
    let answer = 0;
    const dy = Array.from({length: n+2}, () => 0)
    dy[1] = 1;
    dy[2] = 2;
    for(let i = 3; i <= n+1; i ++) {
        dy[i] = dy[i-2] + dy[i-1]
    }
    answer = dy[n+1]
    return answer;
}
console.log(solution(7)) // 34
// 만약 철수가 3칸까지 건너뛸 수 있다면?
// 1칸은 1가지, 2칸은 2가지, 3칸은 1칸에서오는 한가지, 2칸에서 오는 2가지,
// 3칸으로 바로가는 1가지 해서 1+2+1 = 4
// 4칸은 1칸에서 오는 3가지, 2칸에서 오는 2가지, 3칸에서 오는 1가지
// 그러면 3+4+1 = 8
function solution2(n) {
    let answer = 0;
    const dy = Array.from({length: n+1}, () => 0)
    dy[0] = 1;
    dy[1] = 1;
    dy[2] = 2;
    for(let i = 3; i <= n+1; i++) {
        dy[i] = dy[i-3] + dy[i-2] + dy[i-1]
    }
    answer = dy[n+1]
    return answer
}
console.log(solution2(7))