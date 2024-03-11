// lv2 최솟값 만들기
// 길이가 같은 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱한다.
// 이 과정을 배열의 길이만큼 반복하며 각 숫자들을 누적하여 더한다.
// 최종적으로 누적된 값이 최소가 되도록한다.
// k번째 숫자를 뽑았다면 다음에 k번째 숫자는 뽑을 수 없다.

function solution(A,B){
    let answer = 0;
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    answer = A.reduce((acc, cur, i) => acc + cur * B[i], 0)
    return answer;
}
const a = [1, 4, 2]
const b = [5, 4, 4]
console.log(solution(a, b)) // 29

// 최소값이 나오기 위해서는 가장 큰 수와 가장 작은 수를 곱하면 된다.
// 따라서 배열을 하나는 오름차순, 하나는 내림차순으로 해서 곱한 것을 
// 누적으로 더하면 된다.