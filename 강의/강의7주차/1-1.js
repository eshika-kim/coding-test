// 선택 정렬
// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램
function solution(arr){
    let answer=arr;
    for(let i = 0; i < arr.length; i++) {
        let idx = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[idx] > arr[j]) idx = j
        }
        [arr[idx], arr[i]]=[arr[i], arr[idx]]
        console.log(arr)
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));