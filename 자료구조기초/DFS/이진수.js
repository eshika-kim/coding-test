function solution(n) {
  // 1 10/2 => 5 - 0 =>  5/2 2 - 1 2/2 - 1 1011
  let answer = "";
  function DFS(l) {
    if (l === 1) {
      answer += 1;
      return;
    } else {
      DFS(parseInt(l / 2));
      answer += l % 2;
    }
  }
  DFS(n);
  return answer;
}
console.log(solution(10));
console.log(solution(11));

// l = 10 hold
// DFS(5)
// l = 5 hold
// DFS(2)
// DFS(1) 1
// DFS(2) 0
// DFS(5) 1
// DFS(10) 0
