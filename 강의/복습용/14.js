function solution(arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i].length) {
            max = arr[i].length
            answer = arr[i]
        }
    }
    return answer;
}
const str = ["teacher", 'time', 'student', 'beautiful', 'good']
console.log(solution(str))