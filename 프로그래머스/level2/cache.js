function solution(cacheSize, cities) {
  let answer = 0;
  const citiesList = Array.from(cities);
  const cache = [];
  while (citiesList.length > 0) {
    const city = citiesList.shift().toLowerCase();
    if (!cache.includes(city) && cache.length < cacheSize) {
      // cache miss
      cache.push(city);
      answer += 5;
    } else if (!cache.includes(city) && cache.length === cacheSize) {
      // cache miss
      if (cacheSize === 0) {
        answer += 5;
        continue;
      }
      cache.shift();
      cache.push(city);
      answer += 5;
    } else if (cache.includes(city)) {
      // cache hit
      const cacheHitIndex = cache.indexOf(city);
      cache.splice(cacheHitIndex, 1);
      cache.push(city);
      answer += 1;
    }
  }

  return answer;
}
const cities1 = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
];
const cities2 = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
];
const cities3 = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];
const cities4 = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];
const cities5 = ["Jeju", "Pangyo", "NewYork", "newyork"];
const cities6 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
console.log(solution(3, cities1));
console.log(solution(3, cities2));
console.log(solution(2, cities3));
console.log(solution(5, cities4));
console.log(solution(2, cities5));
console.log(solution(0, cities6));
