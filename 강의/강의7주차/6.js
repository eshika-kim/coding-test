// 장난꾸러기 현수
// 키순으로 서있는 학생들 중 현수가 앞 번호를 받고싶어
// 짝꿍과 순서를 바꾸었다. 이 때 현수와 짝꿍의 번호를 반환하는 프로그램을
// 작성하시오
// 시간 복잡도 : O(2N)

function solution(arr){
    let answer=[];
    const tmp = []
    for(let i = 0; i < arr.length; i++) {
        tmp.push(arr[i])
    }
    arr.sort((a, b) => a - b)
    for(let i = 0; i < arr.length; i++) {
        if(tmp[i] !== arr[i]) answer.push(i+1)
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2=[125, 130, 150, 150, 130, 150]
// console.log(solution(arr));
console.log(solution(arr2));