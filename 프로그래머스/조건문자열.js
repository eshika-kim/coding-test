// 숫자 n, m이 주어진다.
// >= 이면 n >= m, <= 이면 n <= m, >! 이면 n > m, < !이면 n < m
// 두 문자열 ineq eq가 주어진다. 
// ineq는 >, < 중 하나, eq는 =, ! 중 하나
// n, m이 주어질 때 ineq와 eq가 조건에 맞는 수이면 1 아니면 0 을 return

function solution(ineq, eq, n, m) {
    if ( n >= m && ineq == '>' && eq == '=') {
        return 1
    } else if( n <= m && ineq == '<' && eq == '=') {
        return 1
    } else if( n > m && ineq == '>' && eq == '!') {
        return 1
    } else if ( n < m && ineq == '<' && eq == '!') {
        return 1
    } else if ( n === m &&  eq == '=') {
        return 1
    }
    return 0
}

console.log(solution("<","=", 20, 50))
console.log(solution(">","!", 41, 78))