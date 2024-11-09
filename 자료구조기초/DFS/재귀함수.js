function solution(n) {
  const answer = [];
  function DFS(l) {
    if (l === n + 1) return;
    else {
      answer.push(l);
    }
    DFS(l + 1);
  }
  DFS(1);
  return answer.join(" ");
}
console.log(solution(3));
