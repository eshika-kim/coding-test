// 백준 괄호문제
// () 완전한 괄호는 vps, ')'나 ')' 는 불완전한 괄호이다. 또한 (()(())) 괄호안에 괄호가 짝이 맞다면 vps, 그 반대는 ps이다.
// vps일 경우 YES, ps일 경우 NO를 출력하는 함수

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const size = parseInt(input.shift());

// 시간복잡도 : O(N) string의 길이만큼 반복하므로
function solution(string) {
  const stack = [];
  stack.push(string[0]);
  for (let i = 1; i < string.length; i++) {
    if (stack[0] === ")") return "NO";
    if (stack.length && stack[stack.length - 1] !== string[i]) {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

for (let i = 0; i < size; i++) {
  console.log(solution(input[i]));
}
