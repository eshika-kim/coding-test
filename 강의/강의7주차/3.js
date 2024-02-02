// special sort(버블정렬 응용)
// N개의 정수가 입력된 것을 정렬하는 출력 프로그램
// 음의 정수는 앞쪽 양의 정수는 뒷쪽
// 양의 정수 음의정수 모두 순서에는 변함이 없어야 한다.
function solution(arr){
    let answer=arr;
    for(let i = 0; i < arr.length - 1; i++ ) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > 0 && arr[j+1] < 0 ) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));