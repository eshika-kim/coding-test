function solution(str, n) {
    let answer = 0;
    for(let x of str) {
        if(x === "R") answer ++;
    }
    return answer;
}
console.log(solution('COMPUTERPROGRAMMING', 'R'))