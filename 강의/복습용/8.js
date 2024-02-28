function solution(arr) {
    let answer = [];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(sum + arr[i] < 100) {
            console.log(sum)
            sum = sum + arr[i]
            answer.push(arr[i])
        }
    }
    return answer;
}
const h = [20, 7, 23, 19, 10, 15, 25, 8, 13]
console.log(solution(h))