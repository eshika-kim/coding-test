// greedy 큰 수 만들기

function solution(number, k) {
    const stack = [];
    for(const num of number) {
        console.log(stack)
        while(k > 0 && stack[stack.length-1] < num) {
            stack.pop()
            k--;
        }
        stack.push(num)
    }
    stack.splice(stack.length-k, k)
    return stack.join('')
}
console.log(solution("4177252841", 4))