// 짝수는 싫어요
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을
//  return하도록 solution 함수를 완성해주세요.

function solution(sides) {
    sides.sort((a, b) => a - b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2
}

console.log(solution([1, 2, 3]))