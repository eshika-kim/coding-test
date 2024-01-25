// 괄호문자제거
// 입력된 문자열에서 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력
function solution(s){  
    let answer;
    let stack=[];
    for(let x of s) {
        if(x === '(') stack.push(x)
        else if(stack[stack.length-1] === '(' && x === ')') {
            stack.pop()
        }
        else {
            if(stack[stack.length-1] !== '(' && stack[stack.length-1] !== ')') stack.push(x)
        }
    }
    answer = stack.join('')
    return answer;
}

function solution2(s) {
    let answer;
    let stack = []
    for(let x of s) {
        if( x === ')') {
            while (stack.pop()!=='(');
        }
        else {
            stack.push(x)
        }
    }
    answer = stack.join('')
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N))HK()";
console.log('1',solution(str));
console.log('답',solution2(str));