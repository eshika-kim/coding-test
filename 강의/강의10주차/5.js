// 최대점수 구하기
// N개의 문제를 풀 때 제한시간 M안에 풀 수 있는 문제중
// 최대 점수를 출력하는 프로그래밍
function solution(n, m, q) {
    let answer;
    const dy = Array.from({length:m + 1}, () => 0)
    console.log(dy)
    for(let i = 0; i < n; i++) {
        let ps = q[i][0]
        let pt = q[i][1]
        for(let j = m; j >= pt; j--) {
            dy[j] = Math.max(dy[j], dy[j - pt] + ps)
            console.log('반복 ','i:',i, 'j:', j, dy[j])
        }
    }
    answer = dy[m]
    console.log(dy)
    return answer;
}
const question = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]] // 점수, 시간
console.log(solution(5, 20, question))