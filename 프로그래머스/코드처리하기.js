// 문자열 code 
// 만약 문자가 1이면 mode를 바꿔 문자열 ret를 만들어냄
// mode는 idx를 0 ~ code.length -1 까지 code[idx]를 다음과 같이 만든다.
// mode가 0일 때
// code[idx]가 1이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가
// code[idx] == 1 mode를 0에서 1로 전환
// mode가 1일 때
// code[idx] != 1이면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가
// code[idx] == 1 mode를 1에서 0으로 전환
// 시작할 때 mode는 0이며 ret이 빈 문자열이면 'EMPTY'를 반환
function solution(code) {
    let mode = 0
    const ret = []
    for(let i = 0; i < code.length; i ++) {
        if( mode == 0 ) {
            if( i % 2 == 0 && code[i] != 1 ) {
                ret.push(code[i])
            }
            if( code[i] == 1) mode = 1
        } else if( mode = 1) {
            if( i % 2 == 1 && code[i] != 1 ) {
                ret.push(code[i])
            }
            if( code[i] == 1 ) mode = 0
        }

    }
    return ret.length > 0 ? ret.join('') : 'EMPTY'
}

const code = "abc1abc1abc"
const answer = solution(code)
console.log(answer)