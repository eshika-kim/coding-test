function solution(arr) {
    let answer = 0;
    let tmp = 0
    for(let i = 0; i < arr.length; i++) {
        if(tmp < arr[i]) {
            answer ++;
            tmp = arr[i]
        }
    }
    return answer;
}
const arr = [130, 135, 148, 140, 145, 150, 150, 153]
console.log(solution(arr))

// function solution() {
//     let answer;

//     return answer;
// }
// console.log(solution())