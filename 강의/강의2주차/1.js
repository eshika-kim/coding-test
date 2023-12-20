// 큰 수 출력하기
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성
function solution(n, arr) {
    let answer=[];
    answer.push(arr[0])
    for(let i = 1; i < arr.length; i++) {
        if( arr[i] > arr[i-1] ) {
            answer.push(arr[i])
        }
    }
    return answer.join(' ')
}
const arr=[7, 3, 9, 5, 6, 12];
console.log(solution(6, arr));