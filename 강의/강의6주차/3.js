// 크레인 인형뽑기
// 0은 빈칸
// 같은 숫자는 같은 종류의 인형
// 두 개 이상의 같은 종류의 인형이 만나면 사라짐
// 사라진 인형의 갯수
function solution(board, moves){
    let answer=0;
    let stack=[]; // stack을 바구니라고 하자
    moves.forEach((move)=> {
        stack.push(board[move-1].pop())
        if(stack[stack.length-1] === 0) stack.pop()
        else if(stack[stack.length-1] === stack[stack.length-2]) {
            stack.pop()
            stack.pop()
            answer += 2
        }
    })
    return answer;
}

function solution2 (board, moves) {
    let answer = 0;
    const stack = []
    moves.forEach((move) => {
        for(let i = 0; i < board.length; i++) {
            if(board[i][move-1] !== 0) {
                let tmp = board[i][move-1]
                board[i][move-1] = 0;
                if( tmp === stack[stack.length - 1]) {
                    stack.pop()
                    answer += 2
                }
                else stack.push(tmp)
                console.log(board)
                break;
            }
        }
    })
    return answer
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];
let b=[1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b));
console.log(solution2(a, b));