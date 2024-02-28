function solution(arr) {
    let answer;
    let set = new Set(arr)
    answer = Array.from(set)
    return answer;
}
const arr = ['good', 'time', 'good', 'time', 'student']
console.log(solution(arr))