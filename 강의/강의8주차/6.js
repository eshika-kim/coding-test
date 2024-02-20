// 바둑이 승차(DFS)
// 바둑이들을 트럭에 태우려고 한다.
// C kg 을 초과하면 태울 수 없다. N마리의 바둑이와 각 바둑이의 무게 W가 주어지면
// 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램

function solution(C, N, W) {
    let answer = 0;
    const weights = []
    function DFS(L, sum) {
        if(sum > C) return
        if(L === N) weights.push(sum)
        else {
            DFS(L + 1, sum + W[L])
            DFS(L + 1, sum)
        }
    }
    DFS(0, 0)
    answer = Math.max(...weights)
    return answer
}
const arr = [81, 58, 42, 33, 61]
console.log(solution(259, 5, arr))