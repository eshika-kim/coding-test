function solution(num_list) {
    let answer = 0;
    const multi = num_list.reduce((a, b) => a * b, 1)
    const square = (num_list.reduce((a, b) => a + b, 0)) ** 2
    return multi > square ? 1 : 0;
}

const num_list = [3, 4, 5, 2, 1]
console.log(solution(num_list))