function solution(a, b, c){
    let answer = "YES"
    const max = Math.max(a, b, c)
    const total = a + b + c
    if( max > total - max ) answer = "NO"
    return answer;
}
console.log(solution(6, 7, 11))
console.log(solution(13, 33, 17))