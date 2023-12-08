// 앞으로 뒤로 읽었을 때 같은 문자열
// 예) level, eye, hannah
// #1. 추가 문자열 활용
function solution (string) {
    let reversed = ''
    for (let i = string.length -1; i >= 0; i--) {
        reversed += string[i]
    }
    console.log(reversed)
    if (string === reversed) {
        return true
    }
    return false
}

// console.log(solution('david'))
// console.log(solution('level'))
// #2 Two pointer 활용
function solutionA (str) {
    const len = str.length
    const middle = Math.floor(len/2)
    for(let i =0; i < middle; i++) {
        if(str.charAt(i) !== str.charAt(len -1 - i)) {
            return false
        }
    }
    return true
}
console.log(solutionA('david'))
console.log(solutionA('level'))