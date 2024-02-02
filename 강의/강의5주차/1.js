// 두 배열 합치기
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
// 첫 번째 줄 : 배열의 크기 N (1 <= N <= 100)
// 두 번째 줄 : N개의 배열 원소가 오름차순으로 주어짐
// 세 번째 줄 : 배열의 크기 M (1 <= M <= 100)
// 네 번째 줄 : M개의 배열 원소가 오름차순으로 주어짐
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않음
// 시간 복잡도 : O(N)
// sort의 시간 복잡도 : NlogN
function solution(arr1, arr2){
    let answer=[];
    for(let i = 0; i < arr1.length; i++) {
        answer.push(arr1[i])
    }
    for(let j = 0; j < arr2.length; j++) {
        answer.push(arr2[j])
    }
    answer.sort((a, b)=> a - b)
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
// console.log(solution(a, b));
// 
// two pointer algorithm
// arr1 p1변수에 1, 3, 5
// arr2 p2변수에 2, 3, 6, 7, 9
// p1=p2=0
function solution2(arr1, arr2) {
    let answer = []
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0
    while(p1 < n && p2 < m) {
        if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++])
        else answer.push(arr2[p2++])
    }
    while(p1 < n) answer.push(arr1[p1++])
    while(p2 < m) answer.push(arr2[p2++])
    return answer;
}
console.log(solution2(a, b));