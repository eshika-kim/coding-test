// greedy => 체육복
// n : 전체 학생 수
// lost : 도난당한 학생 번호
// reserve : 여벌의 체육복을 가져온 학생 번호
// 조건 : 바로 앞번호 혹은 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있다.
// 출력 : 체육수업을 들을 수 있는 학생 수의 최대 값
function solution(n, lost, reserve) {
    const arr = Array(n).fill(1)
    console.log(arr)
    lost.forEach((e) => (arr[e - 1] -= 1)) // 잃어버린 학생
    reserve.forEach((e) => (arr[e - 1] += 1)) // 여벌 있는 학생
    console.log(arr)
    arr.forEach((e, i) => {
        if(arr[i] === 0 && arr[i - 1] === 2) {
            arr[i] += 1
            arr[i - 1] -= 1
        }
        if(arr[i] === 0 && arr[i + 1] === 2) {
            arr[i] += 1
            arr[i + 1] -= 1
        }
    })
    console.log(arr)
    return arr.filter((e) => e > 0).length;
}
const lost1 = [2, 4]
const reserve1 = [1, 3, 5]
// console.log(solution(5, lost1, reserve1)) // 5
const lost2 = [2, 3]
const reserve2 = [3, 4]
console.log(solution(4, lost2, reserve2)) // 3
const lost3 = [3]
const reserve3 = [1]
// console.log(solution(3, lost3, reserve3)) // 2