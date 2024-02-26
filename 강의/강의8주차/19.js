function solution(num_list) {
    let answer = 0;
    let even = "";
    let odd = "";
    for(let x of num_list) {
        if(x % 2 === 0) even += x
        else odd += x
    }
    return answer = Number(even) + Number(odd);
}

const num_list = [3, 4, 5, 2, 1] // 393 351 + 42
const num2 = [5, 7, 8, 3] // 581
console.log(solution(num_list))