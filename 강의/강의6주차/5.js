// 쇠막대기
// 여는 괄호는 막대기의 왼쪽끝 or 레이저의 괄호
// => ( 이게 들어오면 stack 에 push
// ) 닫는 괄호를 만나면 stack에 들어온 것들을 확인한다.
// 닫는 괄호의 i-1번째가 여는 괄호면 레이저일 것이다.
// 그러면 pop을 시켜서 여는 괄호를 없애고
// stack에 들어있는 여는괄호들의 갯수를 세서 answer에 누적시켜준다.
// 다음 닫는 괄호의 i-1번째가 닫는괄호면 레이저가 아니고 막대기 끝지점이므로 
// stack에 들어있는 여는괄호를 pop시켜주고 남은 막대기의 조각을 +1 해준다.

function solution(s){
    let answer=0;
    let stack=[];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stack.push(s[i])
        else {
            if(s[i-1] === '(') { // 레이저라는 뜻
                stack.pop()
                answer += stack.length // 레이저에 의해 잘린 막대기 수
            } else { // 막대기라는 뜻
                stack.pop()
                answer += 1
            } 
        }
    }
    return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));