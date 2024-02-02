// 버블정렬
// 오름차순으로 정렬된 수열 출력
// 시간복잡도 : O(N^2)
function solution(arr){
    let answer=arr;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
// 여기서 i는 도는 횟수일 뿐이고 j가 실제로 도는 idx
// idx = 0부터 j와 j+1을 비교하여 작은 숫자를 스와핑
// 그러면 순서는 초기에 제일 큰 수가 제일 뒤에 오게되어 결정된다.
// [5, 11, 7, 13, 15, 23]
// i는 끝의 숫자가 결정되었기 때문에 arr.length-1까지만 돌면된다.
// 끝의 숫자가 점점 정렬되기 때문에 i가 돌수록 끝에 부분을 덜 돌면된다.
console.log(solution(arr));