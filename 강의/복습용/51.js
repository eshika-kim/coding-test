// 프로그래머스 다리를 지나는 트럭 스택/큐 문제
function solution(s) {
    let answer = true;
    const stk = []
    for(let x of s) {
        if(x === '(') stk.push(x)
        else{
            if(stk.length === 0) answer = false
            stk.pop()
        }
    }
    if(stk.length > 0) answer = false
    return answer
}

const str = "(()(()))(()" //true
console.log(solution(str))