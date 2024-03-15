// 프로그래머스 스택/큐 프로세스
// 우선순위 큐
// const queue = [A, B, C, D]
// 우선순위가 [2, 1, 3, 2] (숫자가 클수록 우선순위가 높음)
// [C, D, A, B]순으로 실행됨
// 즉 A보다 우선순위가 높은 것이 있으므로 A를 다시 큐에 넣는다.
// [B, C, D, A] B도 다시 큐에넣는다. 
// [C, D, A, B] C는 shift되고 [C]
// [D, A, B] D와A는 중요도가 같으므로 그대로 실행 [C, D]
// [A, B] A가 B보다 중요도가 높으므로 그대로 실행 [C, D, A]
// [B] => [] => [C, D, A, B]
// priorities : 중요도가 순서대로 담긴 배열
// location : 알고싶은 프로세스
// output : location의 실행되는 순서
// priorities : [1, 1, 9, 1, 1, 1] location : 0(A) output : 5
// [A, B, C, D, E, F] => [B, C, D, E, F, A] => [C, D, E, F, A, B] => [D, E, F, A, B] 1 C
// [E, F, A, B] 2 D => [F, A, B] 3 E => [A, B] 4 F => [B] 5 A => 답
// location은 알고싶은 index
// priority는 우선순위가 들어있는 배열
// queue에 정렬부터 한다..
function solution(priorities, location) {
    let answer = 0;
    const queue = Array.from({length:priorities.length}, (_, idx) => idx); // priority의 idx
    let max = Math.max(...priorities); // 현재 우선순위 가장 높은 수를 골라놓는다
    while(priorities) {
        max = Math.max(...priorities); // 현재 돌아가는 프로세스 내 가장 큰 우선순위

        if(priorities[0] < max) { // 실행하려는 프로세스가 maxIdx보다 작으면 shift후 맨 뒤로 보내기
            priorities.push(priorities.shift());
            queue.push(queue.shift());
        }
        else if(priorities[0] === max) { // 우선순위가 같으면 그냥 실행
            answer ++;
            priorities.shift();
            if(queue.shift() === location) { // location === idx이므로 
                return answer
            }
        }
    }
}
const priorities1 = [1, 1, 9, 1, 1, 1]
console.log(solution(priorities1, 0))
