// my_string overwrite_string, 정수 s
// my_string의 인덱스 s부터 overwrite_string의 길이만큼
// overwrite_string으로 바꾼 문자열을 return하는 함수

function solution (my_string, overwrite_string, s) {
    const stringArr = my_string.split('')
    stringArr.splice(s, overwrite_string.length, overwrite_string)
    const answer = stringArr.join('')
    return answer
}
const my_string1 = "He11oWor1d"
const overwrite_string1 = "lloWorl"
const s1 = 2


console.log(solution(my_string1,overwrite_string1, s1))