// 배열 arr 에서 연속적으로 나타나는 숫자를 제거한 후 배열을 반환

function solution (arr) {
    const answer = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            answer.push(arr[i])
        }
    }
    return answer
}

const number = [1,1,3,3,0,1,1]
console.log(solution(number))
