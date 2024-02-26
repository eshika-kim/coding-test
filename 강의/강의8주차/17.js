function solution(num_list) {
    num_list.sort((a, b) => a - b)
    console.log(num_list)
    for(let i = 0; i < 5; i++) {
        num_list.shift()
    }
    return num_list;
}

const num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10]
console.log(solution(num_list))