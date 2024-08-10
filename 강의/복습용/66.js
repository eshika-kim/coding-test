function solution(my_string, is_suffix) {
    let answer = 0;
    const suffixes = [];
    const n = my_string.length
    for(let i = 0; i < n; i++) {
        suffixes.push(my_string.substring(i, n))
    }
    suffixes.sort()
    if(suffixes.includes(is_suffix)) answer = 1;
    return answer;
}

const a = "banana"
const s = 'ana'
const s2 = 'nan'
console.log(solution(a, s))
console.log(solution(a, s2))