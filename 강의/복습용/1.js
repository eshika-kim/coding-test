function solution(a, b, c) {
    return answer = Math.min(a, b, c)
}
console.log(solution(6, 5, 11))
function solution2(a, b, c) {
    let number = [a, b, c]
    let answer = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < number.length; i++) {
        if( answer > number[i]) answer = number[i]
    }
    return answer
}
console.log(solution2(6, 5, 11))

// function solution() {

// }
// console.log(solution())