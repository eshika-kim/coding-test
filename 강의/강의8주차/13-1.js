// 수열 추측하기 복습
// 파스칼 삼각형의 수의 합대로 만드려면

function solution(n, f) {
    let answer, flag = 0
    let dy = Array.from(Array(11), () => Array(11).fill(0))
    const b = Array.from({length:n}, () => 0) // 순열에 pick된 숫자들과 곱할 수 있는 값이 채워진다.
    const ch = Array.from({length:n + 1}, () => 0) // 체크 배열
    const p = Array.from({length:n}, () => 0) // 숫자 배열 1324 1234 등등...
    function combination(n, r) { // 미리 메모제이션 해놓는 함수
        if(dy[n][r] > 0) return dy[n][r]
        if( r === 0 || n === r ) return 1;
        else return dy[n][r] = combination(n-1, r-1) + combination(n-1, r)
    }

    function DFS(L, sum) {
        if(flag || sum > f) return
        if(L === n && sum === f) {
            answer = p.slice()
            flag = 1
        }
        else {
            for(let i = 1; i <= n; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1
                    p[L] = i // 
                    DFS(L + 1, sum + (b[L] * p[L])) // combination과 pick된 숫자의곱
                    // 예제로는 1 * 3, 1 * 3, 2 * 3, 4 * 1
                    ch[i] = 0
                }
            }
        }
    } 

    for(let i = 0; i < n; i++) {
        b[i] = combination(n - 1, i)
    }
    console.log('체크', b)
    DFS(0, 0)
    return answer;
}

console.log(solution(4, 16))