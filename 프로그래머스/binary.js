function binarySearch (arr, target) {
    arr.sort((a, b) => a - b)
    let low = 0;
    let high = arr.length - 1
    let point = 0;
    while(low <= high) {
        let middle = Math.floor((low+high)/2)
        if(target < arr[middle]) {
            high = middle - 1
            point ++
        } else if (target > arr[middle]) {
            low = middle + 1
            point ++
        } else {
            return {middle, point}
        }
    }
    return -1
}

const number = [1, 3, 6, 8, 10, 20, 40, 55]
const target = 55
console.log(binarySearch(number, target))