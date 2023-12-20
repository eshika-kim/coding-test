// 등수 구하기
// 등수대로 출력하기

function solution(arr){  
    let mid = Math.floor(arr.length-1) / 2
    let answer = Array.from({length: arr.length}, ()=>1)
    for( let i = 0; i < arr.length; i++ ) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[i]) answer[i]++;
        }
    }
      
    return answer;
}

let arr=[92, 92, 92, 100, 76];
console.log(solution(arr));