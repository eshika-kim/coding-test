// 프로그래머스 중앙값 구하기
function solution(arr) {
    let answer = 0;
    arr.sort((a, b) => a - b)
    answer = arr[Math.floor(arr.length/2)]
    return answer;
}
const arr = [1, 2, 7, 10, 11]
const arr2 = [9, -1, 0]
console.log(solution(arr))
console.log(solution(arr2))