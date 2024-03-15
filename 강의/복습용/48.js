function solution(l, r) {
    const answer = [];
    for(let i = l; i <= r; i += 5) {
        let tmp = String(i)
        if(![...tmp].every(e => e === '5' || e === '0')) continue;
        answer.push(i)
    }
    return answer.length ? answer : [-1];
}
// 이진수와 generator 함수 문법을 이용한 풀이
console.log(solution(10,20))
function* gen50() {
    let i = 1;

    while(true) {
        yield Number(Number(i).toString(2)) * 5;
        i++;
    }
}
function solution(l, r) {
    const n = gen50();
    let a = 0;
    const arr = [];

    while(a < l) { a = n.next().value; } // 처음 값은 l보다 작을때까지 반복 10이면 
    // 1다음으로 넘어가서 a=5가 되고, i는 2가된다. 다음 5는 10보다 작으므로 
    // 2를 이진수로 바꾼다 10이 되고 거기에 5를 곱하면 50이된다. a=50이되고 
    // 다음 while문으로 넘어간다.
    while(a <= r) { arr.push(a); a = n.next().value; } // a는 50인데 r은 20이므로 
    // 바로 false가 되어 while문을 빠져나간다.

    return arr.length ? arr : [-1]; // arr에는 아무것도 없으므로 -1을 반환
}

