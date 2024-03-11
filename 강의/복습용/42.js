// 머쓱이보다 키 큰 사람
// 배열 array와 머쓱이의 키 height 가 매개변수로 주어질 때 
// 머쓱이보다 키 큰 사람의 수를 return
function solution(array, height) {
    let answer = 0;
    for(let x of array) {
        if(x > height) answer ++;
    }
    return answer;
}
const arr = [149, 180, 192, 170]
console.log(solution(arr, 167))