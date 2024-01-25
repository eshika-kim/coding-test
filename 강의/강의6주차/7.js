// 교육과정 설계
// 만약 필수 과목이 CBA로 주어지면 순서대로 수업계획을 짜야한다.
// 만약 누군가 C, B, D, A, G, E 순서로 짜면 제대로 된 계획이나
// C, G, E, A, D, B순서로 짜면 잘못 짠 계획이다.
// 잘짠 계획이면 YES, 아니면 NO를 출력하는 프로그램을 작성.

function solution(need, plan){
    let answer="YES";
    const queue = Array.from(need)
    for(let x of plan) {
        if(queue.includes(x)) {
            if(x !== queue.shift()) answer = "NO"
        }
        if(queue.length === 0) break;
        if(queue.length > 0) answer = "NO"
    }
    console.log(queue)

    return answer;
}

let a="CBA";
let b="CBDAGE";
let c="CGEADB"
let d="CGEDB"
// console.log(solution(a, b));
console.log(solution(a, c));
console.log(solution(a, d));
