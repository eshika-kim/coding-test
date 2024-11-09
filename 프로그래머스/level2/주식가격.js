// 문제 풀이
// prices 라는 배열이 들어오고 배열의 순서는 시간, 배열의 값은 주식가격이다.
// [1, 2, 3, 2, 3] 일 경우 1초의 가격은 1, 5초의 가격은 3이다.
// 반환 값은 prices와 동일한 배열의 길이를 가지며 가격이 떨어지지 않은 기간의 값들의 배열을 반환하면 된다.
// 1초의 가격은 끝까지 떨어지지 않으므로 4
// 2초의 가격은 끝까지 떨어지지 않으므로 3
// 3초의 가격은 1초뒤에 떨어지므로 1
// 4초의 가격은 끝까지 떨어지지 않으므로 1
// 맨 끝의 값은 비교하는 시간이 없으므로 0
const arr = [1, 2, 3, 2, 3];

function solution3(prices) {
  const answer = [];
  // 시간 복잡도 O(N^2)
  // 공간 복잡도 prices크기만큼 answer의 크기가 배정되므로 O(N)
  for (let i = 0; i < prices.length - 2; i++) {
    let count = 1;
    for (let j = i + 1; j < prices.length - 1; j++) {
      if (prices[i] > prices[j]) {
        answer.push(count);
        console.log(`break문에 걸리는 경우 ${(prices[i], prices[j])}`);
        break;
      } else {
        count++;
      }
    }
    answer.push(count);
  }
  answer.push(0);
  return answer;
}
console.log(solution3(arr)); // [4, 3, 1, 1, 1, 0]

// 위에처럼 풀면 가격이 떨어지는 경우 두 번째 반복문을 끝내지 못하는 상황이 발생함
// 그래서 stack으로 원본 배열을 뒤집어서 풀기로 생각함
function solution4(prices) {
  const answer = [];
  const reversePrices = prices.reverse();
  console.log(reversePrices);
  while (reversePrices.length < 0) {
    let count = 0;
    for (let i = 1; i < prices.length; i++) {
      // for(let j = i + 1; j < j++;) {}
    }
    return answer;
  }
}
// console.log(solution4(arr));
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

console.log(solution(arr));
console.log(solution2(arr));
