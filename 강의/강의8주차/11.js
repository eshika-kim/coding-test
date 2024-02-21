// 팩토리얼
// 자연수 N을 입력하면 N!값을 구하세요
function solution(N) {
    let answer = 0
    function DFS(L, mul) {
        if(L === N + 1) {
            answer = mul
        }
        else {
            mul = L * mul
            console.log(L, mul)
            DFS(L + 1, mul)
        }
    }
    DFS(1, 1)
    return answer;
}

console.log(solution(5))