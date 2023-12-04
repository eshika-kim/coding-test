// 매개변수로 array가 주어짐
// array는 숫자로 되어있는 문자열로 이루어져있고
// 특정 번호가 다른번호의 접두사인 경우 false 출력 아니면 true 출력

// function solution (phone_book) {
//     for (let i = 0; i < phone_book.length; i++) {
//         for(let j = i + 1; j < phone_book.length; j++) {
//             if(i !== j && phone_book[j].indexOf(phone_book[i]) === 0 || phone_book[i].indexOf(phone_book[j]) === 0) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// ==> t시간 복잡도가 O(n^2) 이어서 효율성문제로 실패
let phone = ['875', '456', '123456', '567']
console.log(solution(phone))

function solution (phone_book) {
    phone_book.sort();
    for (let i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i + 1].indexOf(phone_book[i]) === 0) {
            return false;
        }
    }
    return true
}