// 수열 추측하기
// 가장윗줄에 1~N까지의 숫자가 한 개씩 적혀있다.
// 둘째 줄부터 파스칼의 삼각형처럼 두개를 더한 값이 저장된다.
// N = 4, 3 1 2 4 면 다음과 같다.
// 3 1 2 4
//  4 3 6
//   7 9
//   16
function solution(n, f) {
    let answer, flag = 0
    let dy = Array.from(Array(11), () => Array(11).fill(0)) // N이 1<=N <=10 조건
    let ch = Array.from({length:n+1}, ()=> 0) // 순열을 확인하기 위한 체크
    let p = Array.from({length: n}, ()=> 0) // 순열 저장
    let b = Array.from({length:n}, () => 0) // combination
    function combi(n, r) { // 메모이제이션
        if(dy[n][r] > 0) return dy[n][r]
        if(n === r || r === 0) return 1;
        else return dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r)

    }
    function DFS(L, sum) {
        if(flag) return;
        if(L === n && sum === f) {
            answer = p.slice()
            flag = 1;
        }
        else {
            for(let i = 1; i <= n; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1
                    p[L] = i
                    DFS(L + 1, sum + (b[L]* p[L]))
                    ch[i] = 0
                }
            }
        }
    }

    for(let i = 0; i < n; i++) {
        b[i] = combi(n - 1, i)
    }
    DFS(0, 0);

    return answer;

}

console.log(solution(4, 16))