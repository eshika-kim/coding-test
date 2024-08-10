// promise 연습
// 아이스 아메리카노 주문 => 샷 내리는 중(1초) => 얼음 준비중(2초) => 
// 컵에 넣는 중(1초) => 아메리카노 나왔습니다!
const cafe = {
    아메리카노: 3
}
const promise1 = new Promise((resolve, reject) => {
    if(cafe.아메리카노 < 5) {
        reject(new Error('재고 없음'))
    }
    resolve('아이스 아메리카노 주문')
})
promise1
    .then((v) => {
        console.log(v)
        console.log('샷 내리는 중입니다.')
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('샷 내리기 완료')
            }, 1000)
        })
    })
    .catch((error) => {console.log(error); throw error;})
    .then((v) => {
        console.log(v)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('얼음 준비 완료')
            }, 2000)
        })
    })
    .catch((error) => {
        console.log(error);
        return Promise.reject(error)
    })
    .then((v) => {
        console.log(v)
        console.log('컵에 음료를 넣는 중입니다.')
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('음료 준비 완료')
            }, 1000)
        })
    })
    .catch((error) => {
        console.log(error)
        return Promise.reject(error)
    })
    .then((v) => {
        console.log(v)
        console.log('아메리카노 나왔습니다!')
    })
    .catch((error) => {
        console.log(error)
        return Promise.reject(error)
    })
