function solution(arr) {
    let answer = 0;
    let conti = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1 && arr[i-1] === 1) {
            conti ++;
            answer ++;
            answer += conti
        }
        else if(arr[i] === 1) {
            answer ++;
            conti = 0;
        }
    }

    return answer;
}
const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
console.log(solution(arr))