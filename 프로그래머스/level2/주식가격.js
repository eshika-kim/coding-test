// 첫 번째 답
// 시간 복잡도 : 바깥쪽 루프(i) = arr의 크기만큼, 안쪽 루프(j) = arr - 1 크기만큼
// 총 합은 등차수열 만큼 나오게 됨 : arr.length가 예시와 같은 경우 5 + 4 + 3 + 2 + 1 ...
// 따라서 O(N^2)
// 공간 복잡도 : arr의 크기만큼 answer의 공간을 차지하므로 O(N)
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    for (let j = i + 1; j < arr.length; j++) {
      flag++;
      if (arr[i] > arr[j]) break;
    }
    answer.push(flag);
  }
  return answer;
}
// 위의 함수는 큐를 기준으로 만들어짐, 단점은 시간복잡도가 좋지 않음


// 시간복잡도 : 첫 번째 루프 arr크기와 같은 수로 반복, 두 번째 루프 arr -1 크기와 같은 수로 반복 => 고로 O(N^2)
// 공간복잡도 : answer, stack은 arr크기와 같은 공간을 차지하여 2N, price, count는 계속 변경되는 값이므로 상수 2 => 결국 O(N)
function solution2(arr) {
  const answer = [];
  const stack = arr.reverse();
  while (stack.length) {
    const price = stack.pop();
    let count = 0;
    for (let i = stack.length - 1; i >= 0; i--) {
      count++;
      if (price > stack[i]) break;
    }
    answer.push(count);
  }
  return answer;
}
const arr = [1, 2, 3, 2, 3];
console.log(solution(arr));
console.log(solution2(arr));
