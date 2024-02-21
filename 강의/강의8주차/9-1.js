// 9번을 더 효율적인 코드로 변경하기
function solution(m, arr){
    let answer=Number.MAX_SAFE_INTEGER;
    let n = arr.length;
    function DFS(L, sum) { // L = 동전개수, 누적 금액
        if(sum > m) return
        if( L >= answer ) return // 이미 작은 값을 찾은 상태에서 더 큰 값을 탐색할 필요는 없다.
        if(sum === m) {
            console.log(L, sum)
            answer = Math.min(answer, L)
        }
        else {
            for(let i = 0; i < n; i++) {
                DFS(L + 1, sum + arr[i])
            }
        }
    }
    DFS(0, 0)
    
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));