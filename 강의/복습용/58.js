// 타겟넘버
// n개의 양의 정수가 있다. 이 정수들을 순서를 바꾸지 않고
// 더하거나 빼서 타겟 넘버를 만들려 한다.
// ex) [1, 1, 1, 1, 1] target num = 3
// -1+1+1+1+1 = 3....
function solution(numbers, target) {
    let answer = 0
    const ch = Array(numbers.length).fill(0)
    function DFS(L) {
        if(L === numbers.length) {
            let tmp = 0
            for(let i = 0; i < numbers.length; i++) {
                if(ch[i] === 1) tmp += numbers[i]
                if(ch[i] === 0) tmp -= numbers[i]
            }
            if(tmp === target) answer ++;
        }
        else {
            ch[L] = 1;
            DFS(L+1);
            ch[L] = 0;
            DFS(L+1);
        }
    }
    DFS(0)
    return answer;
}
const ex1 = [4, 1, 2, 1]
console.log(solution(ex1, 4))