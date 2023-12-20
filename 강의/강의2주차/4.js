// 점수 계산
// 답이 맞으면 1, 틀리면 0
// 연속으로 답이 맞으면 연속맞은 문제에 K점으로 계산

function solution(arr){         
    let answer = 0; 
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            cnt ++
            answer += cnt
        } else cnt = 0
    }      
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));