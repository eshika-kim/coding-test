function solution(arr) {
    let answer = [];
    for(let x of arr) {
        let res = Number(x.toString().split('').reverse().join(''))
        console.log(res)
        if(isPrime(res)) answer.push(res)
    }
    return answer;
}
function isPrime(num) {
    if(num === 1) return false;
    for(let i = 2; i <= parseInt(Math.sqrt(num/2)); i++) {
        if(num % i === 0) return false
    }
    return true
}
const nums = [32, 55, 62, 20, 250, 370, 200, 30, 100]
console.log(solution(nums))

// function solution() {
//     let answer;

//     return answer;
// }
// console.log(solution())