// 세 주사위를 굴렸을 때 나온 숫자 a, b, c
// 세 숫자가 다르면 a+b+c 점
// 두 숫자는 같고 하나가 다르면 (a + b + c) × (a2 + b2 + c2 )
// 세 숫자가 모두 다르면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점
function solution (a, b, c) {
    if(a === b && b === c) {
        return (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    } else if( a === b || b === c || a === c) {
        return (a + b + c) * (a**2 + b**2 + c**2)
    } else {
        return a + b + c
    }
}
console.log(solution(2, 6, 1))
console.log(solution(5, 3, 3))
console.log(solution(4, 4, 4))