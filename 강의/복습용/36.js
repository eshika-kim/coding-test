// 4-4 문제 DFS로 풀어보기
function solution(m, p) {
    let answer = 0;
    p.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1]))
    function DFS(L, budget) {
        console.log(budget, L)
        if(budget < p[L][0] + p[L][1]) {
            answer = L
            return
        }
        else if(L === 0 && budget >= (p[L][0]/2) + p[L][1]){
            budget = budget - (p[L][0]/2) - p[L][1]
            DFS(L + 1, budget)
        }
        else if(budget >= p[L][0] + p[L][1]){
            budget = budget - p[L][0] - p[L][1]
            DFS(L + 1, budget)
        }
    }
    DFS(0, m)
    
    return answer;
}
let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));