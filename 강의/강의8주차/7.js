// 최대점수 구하기(DFS)
// N개의 문제와 문제를 풀었을 때 얻는 점수, 걸리는 시간이 주어진다.
// 제한시간 M안에 N개의 문제를 풀 경우 중 최대 점수를 출력
function solution(m, ps, pt){         
    let answer=Number.MIN_SAFE_INTEGER;
    function DFS(L, points, time) {
        if(time > m) return
        if(L === ps.length) {
            answer = Math.max(answer, points)
        }
        else {
            DFS(L + 1, points + ps[L], time + pt[L])
            DFS(L + 1, points , time)
        }
    }
    DFS(0, 0, 0)
    return answer;
}

let ps=[10, 25, 15, 6, 7]; // 점수
let pt=[5, 12, 8, 3, 4] // 걸리는 시간
console.log(solution(20, ps, pt)); // 답 : 41
// n이 작을때만 DFS가 유용하다. n이 커지면 커질수록 이진트리의 구조가 복잡해지기 때문에
// 시간이 오래걸린다. 그 이후에는 동적계획법으로 푸는것이 좋다.