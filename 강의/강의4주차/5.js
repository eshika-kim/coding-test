// K번째 큰 수
// N : 1~100까지 수
// 이 중 3장을 뽑아 적힌 수를 합한 모든 경우의 수를 기록
// 기록한 값 중 K번째로 큰 수를 출력하는 프로그램
// 만약 K번째 수가 존재하지 않으면 -1출력
// 3개의 숫자를 뽑아 만드는 조합
function solution(n, k, card){
    let answer;
    let tmp = new Set()
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                tmp.add(card[i] + card[j] + card[k])
            }
        }
    }
    let a = Array.from(tmp).sort((a, b)=> b - a)
    console.log(a)
    console.log(tmp)
    answer = a[k-1]
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));