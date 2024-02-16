const arr = [1, 2, 3, 4, 5, -3, 6, 8, 9, 4, 2, -7]

//1
const mappedArr = arr.map(c => c * 2)

console.log(mappedArr)

//2
const filteredArr = arr.filter(c => c % 2 === 0)

console.log(filteredArr)

//3
const hasPositiveNum = arr.some(c => c >= 0)

console.log(hasPositiveNum)

//4

const hasOnlyPositives = arr.every(c => c >= 0)
console.log(hasOnlyPositives)