// 순열 복습
function solution(m, arr) {
    let answer = []
    let n = arr.length
    const ch = Array.from({length:n}, () => 0)
    const tmp = Array.from({length:m})
    function DFS(L) {
        if(L === m) answer.push(tmp.slice())
        else {
            for(let i = 0; i < n; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1
                    tmp[L] = arr[i]
                    DFS(L + 1)
                    ch[i] = 0
                }
            } 
        }
    }
    DFS(0)
    answer.sort()
    return answer
}

const arr = [3, 6, 9, 5]
console.log(solution(2, arr))