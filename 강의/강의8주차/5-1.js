// 강사님 풀이
function solution (arr) {
    let answer = "NO"; flag = 0;
    let total = arr.reduce((a, b) => a + b, 0);
    let n = arr.length
    function DFS(L, sum) {
        if(L === n) {
            if(flag) return; // 참이 되면 프로그램을 종료시키는 조건
            console.log(sum)
            if((total - sum) === sum) {
                answer = "YES"
                flag = 1
            }
        }
        else {
            DFS(L + 1, sum + arr[L]); // 원소를 더하는 경우
            DFS(L + 1, sum); // 원소를 더하지 않은경우
        }
    }
    DFS(0, 0)
    return answer
}

const arr = [1, 3, 5, 6, 7, 10]
console.log(solution(arr))