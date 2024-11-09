function solution(n) {
  // 첫 반복문 시간복잡도 : 최악일 경우 100,000,000이므로 3.3천만번, log_3(n) 에 비례
  // 그러므로 O(logN)
  // 두 번째 문자열 조작 역시 log_3(n)길이만큼 반복하므로 O(logN)
  // 세 번째 문자열의 길이만큼의 배열을 반복하므로 O(logN)
  // n이 1이나 2가될 때까지 3으로 나눈다.(3진법을 앞뒤 반전 시킨 값으로 아예 세팅)
  let convert = "";
  while (n >= 3) {
    convert += n % 3;
    n = parseInt(n / 3);
  }
  // 마지막으로 n을 넣어준다.
  convert += n;
  const reverse = convert.split("").reverse().map(Number);
  let answer = 0;
  // 10진법으로 변환, 배열의 값과 3의 index승으로 더해서 반환
  for (let i = 0; i < reverse.length; i++) {
    answer += reverse[i] * 3 ** i;
  }
  return answer;
}
console.log(solution(45)); // 7

// 다른 풀이
// parseInt에 두 번째 매개변수인 radix (숫자)를 넣으면 해당 진법에서 10진법으로 반환해줌
// parseInt("17", 8) => 15 반환 즉 17이 8진법으로 되어있으니 변환하면 15가 됨.
// toString은 문자열을 반환하는 메서드로 매개변수로 숫자를 넣으면 오버라이딩 되어 해당 진법으로 변환하여 string객체로 반환
function solution1(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
console.log(solution1(45));

console.log([..."35"]);
