function solution(n, arr) {
    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 10 === n) answer ++;
    }
    return answer;
}
const arr = [25, 23, 11, 47, 53, 17, 33]
const arr2 = [12, 20, 54, 30, 87, 91, 30]
console.log(solution(3, arr))
console.log(solution(0, arr2))

// function solution() {
//     let answer;

//     return answer;
// }
// console.log(solution())