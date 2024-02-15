// 좌표 정렬
// 좌표 (x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램 작성
// x먼저 정렬한 뒤 x값이 같으면 y에 의해 정렬
function solution(arr){
    let answer=arr;
    arr.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1]
        else return a[0] - b[0]
    })
    return answer;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));