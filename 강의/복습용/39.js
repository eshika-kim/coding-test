function solution(s) {
    let answer = '';
    const nums = s.split(' ')
    answer += Math.min(...nums) + ' ' + Math.max(...nums)
    return answer;
}
console.log(solution('1 2 3 4'))