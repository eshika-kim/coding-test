// 부분집합 구하기(DFS) : 시간 복잡도 O(log N)
// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력
// 단, 공집합은 참여하지 않는다.
function solution(n) {
    let answer=[];
    let ch = Array.from({length:n+1}, ()=>0)
    function DFS(v) {
        if(v === n + 1) {
            let tmp=""
            for(let i = 1; i <= n; i++) {
                if(ch[i]===1) tmp += i + " "
            }
            if(tmp.length > 0) answer.push(tmp.trim())
        } else {
            ch[v] = 1;
            DFS(v + 1);
            ch[v] = 0;
            DFS(v + 1);
        }
    }
    DFS(1)
    return answer
}
console.log(solution(3))