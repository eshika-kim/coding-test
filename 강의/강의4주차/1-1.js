// 자릿수의 합 다시 혼자서 풀어보기
// 입력 : N (3<= N <= 100) -> N개의 자연 수 각 자연수의 크기는 10,000,000을 넘지 않는다.
// 출력 : 자릿수의 합이 최대인 자연수 출력

function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    // for문을 사용하여 매개변수로 들어온 배열을 모두 반복
    // 배열 하나요소를 쪼개서 그 수의 합을 max에 할당
    // 그 다음 요소가 이전 요소에 비해 크면 max에 할당하고 아니면 넘어감
    for (let x of arr) {
        let sum = x.toString().split('').reduce((a, b)=> a+Number(b), 0)
        if(max < sum) {
            max = sum
            answer = x
        } else if (sum === max) {
            if(x > answer) answer = x;
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));