// 최장 증가 부분 수열
// 복습, 생각하면서 프로그래밍하기
function solution(arr) {
    let answer = 0;
    const dy = Array.from({length:arr.length}, () => 0)
    dy[0] = 1
    for(let i = 0; i < arr.length; i++) {
        let max = 0;
        for(let j = i - 1; j >= 0; j--) {
            if(arr[i] > arr[j] && dy[j] > max) {
                max = dy[j] // 만약 7이라면 5와 3의 dy값이 각각 1일 것이다.
            }
        }
        dy[i] = max + 1 // 그러면 그 중 긴값 아무거나 + 1해주면 된다.(자기자신을 포함하는 값)
        answer = Math.max(answer, dy[i])
    }
    return answer
}
const arr = [5, 3, 7, 8, 6, 2, 9, 4]
console.log(solution(arr)) // 4