function solution(arr) {
    let answer = "";
    answer += arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) answer += arr[i]
    }
    return answer;
}
const arr = [7, 3, 9, 5, 6, 12]
console.log(solution(arr))

// function solution() {
//     let answer;

//     return answer;
// }
// console.log(solution())