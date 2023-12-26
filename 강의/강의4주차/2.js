// 뒤집은 소수
// N개의 자연수가 입력되고 자연수를 뒤집은 수가 소수이면 그 수의 소수를 출력
// ex 32 => 23 / 910 => 19 이 때, 뒤집으면 019가 되므로 0은 무시

// 우선 뒤집은 수를 재배열화
function solution(arr){
    let answer=[];
    const reverse = arr.map((num) => {
        return Number(num.toString().split('').reverse().join(''))
    })
    for(const num of reverse) {
        if(isPrime(num)) answer.push(num)
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution2(arr));
console.log(solution(arr));

function isPrime(num) {
    if(num === 1) return false
    for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if(num % i === 0) return false
    }
    return true
}

function solution2(arr){
    let answer=[];
    for (let x of arr) {
        let res = 0;
        while(x) {
            let t = x % 10 // 250 => 0 => 5 => 2
            res = res * 10 + t //  0 => 5 => 52
            x = parseInt(x / 10) // 25 => 2 => 0
        }
        if(isPrime(res)) answer.push(res)
    }
    return answer;
}

