// 전위 순회
function solution(n) {
  let answer = [1];
  function DFS(l) {
    if (l * 2 > n) {
      return;
    } else {
      answer.push(l * 2);
      DFS(l * 2);
      answer.push(l * 2 + 1);
      DFS(l * 2 + 1);
    }
  }
  DFS(1);
  return answer.join(" ");
}
// DFS(1) -> 2 push, DFS(2)
// DFS(2) -> 4 push, DFS(4)
// DFS(8) -> return
// DFS(2) 돌아감 -> 5 push -> DFS(5)
// DFS(10) -> return
// DFS(1) 돌아감 -> 3 push, DFS(3)
// DFS(3) -> 6 push, DFS(12)
// DFS(12) return
// DFS(3) 돌아감 7 push, DFS(14)
// DFS(14) return
// 완료

// 중위 순회 : 왼쪽에 있는 자식 -> 뿌리 -> 오른쪽 자식
function solution2(n) {
  const answer = [];
  function DFS(l) {
    if (l > n) {
      return;
    } else {
      DFS(l * 2);
      answer.push(l);
      DFS(l * 2 + 1);
    }
  }
  DFS(1);
  return answer;
}
// DFS(1) -> DFS(2) -> DFS(4) -> DFS(8) -> return
// DFS(4)에서 push 4 -> DFS(9) return
// DFS(2)에서 push 2 -> DFS(5) -> DFS(10) return
// DFS(5)에서 push 5 -> DFS(11) return
// DFS(1)에서 DFS(3) -> DFS(6) -> DFS(12) -> return
// DFS(6)에서 push 6 -> DFS(13) -> return
// DFS(3)에서 Push 3 -> DFS(7) -> DFS(14) -> return
// DFS(7)에서 push 7 -> DFS(15) -> return 끝

// 후위 순회
function solution3(n) {
  const answer = [];
  function DFS(l) {
    if (l > n) return;
    else {
      DFS(l * 2);
      DFS(l * 2 + 1);
      answer.push(l);
    }
  }
  DFS(1);
  return answer;
}
// DFS(1) -> DFS(2) -> DFS(4) -> DFS(8) return
// DFS(4) -> DFS(9) -> return
// DFS(4) push 4
// DFS(2) -> DFS(5) -> DFS(10) return
// DFS(5) -> DFS(11) return
// DFS(5) push 5
// DFS(2) push 2
// DFS(1) -> DFS(3) -> DFS(6) -> DFS(12) return
// DFS(6) -> DFS(14) return
// DFS(6) push 6
// DFS(3) -> DFS(7) -> DFS(14) return
// DFS(7) push 7
// DFS(3) push 3
// console.log(solution(7));
// console.log(solution2(7));
console.log(solution3(7));
