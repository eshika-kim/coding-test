// num_list 배열이 주어질 때
// 마지막 원소(a)가 그 전 원소(b)보다 크면 a-b를
// 작으면 a * 2를 배열에 추가하여 return
function solution(num_list) {
    const [a, b] = [...num_list].reverse()
    return [...num_list, a > b ? (a-b):a*2]
}