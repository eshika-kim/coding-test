const a = [1, 2];
// 일 때 모든 조합의 수와 모든 수의 조합을 반환
// [], [1], [2], [1, 2] => 4개 2^2

const b = [1, 2, 3];
// 일 때
// [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] => 8개 2^3
// 그러면 위의 조합과 차이는 기존 원소들과 새로들어온 숫자(원소)의 조합이 추가되면 된다.

const c = [1, 2, 3, 4];
// [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4]
// [1, 4], [2, 4], [3, 4], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4] => 16개 2^4

function solution(arr) {
  let answer = 0;
  const combinationArr = [[]];
  function DFS(v) {
    if (v === arr.length - 1) return;
    else {
      for (let i = 0; i <= arr.length; i++) {
        let combination = [];
        combination.push(arr[i]);
      }
    }
  }
  DFS(0);
}
