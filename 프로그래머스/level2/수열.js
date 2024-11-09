// 백준 괄호문제
// 내가 만들 수 있는 오름차순으로 만 된 스택이 있고 이 스택에서 꺼내서 해당 수열을 만들어야 한다.
// 수열을 만들지 못하면 NO 수열을 만들 수 있으면 push 는 +, pop -로 어떻게 만들어지는지 출력하기
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const size = parseInt(input.shift());

function solution(arr) {
  // 오름차순대로 넣을 스택 배열
  const myStack = [];

  // + or - or NO 가 들어갈 배열
  let answer = [];

  let stackNumber = 1;
  for (let i = 0; i < size; i++) {
    let number = parseInt(arr[i]);

    while (stackNumber <= number) {
      myStack.push(stackNumber);
      stackNumber++;
      answer.push("+");
    }
    let stackPop = myStack.pop();
    answer.push("-");
    if (stackPop !== number) {
      answer = ["NO"];
      break;
    }
  }
  return answer.join("\n");
}
console.log(solution(input));
