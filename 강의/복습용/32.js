function solution(arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for(let x of arr) {
        let tmp = x; 
        let sum = 0
        while(tmp) {
            sum += tmp % 10
            tmp = Math.floor(tmp/10)
        }
        if(sum > max) {
            max = sum
            answer = x
        } else if(sum === max) {
            if(x > answer) answer = x;
        }
    }
    return answer;
}
const numbers = [121, 460, 603, 40, 521, 235, 1234]
console.log(solution(numbers))

// function solution() {
//     let answer;

//     return answer;
// }
// console.log(solution())