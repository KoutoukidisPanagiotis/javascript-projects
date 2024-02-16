//1
const testArr = [1,1,1,3,4,5,6,7,7]

function removeDoubleEntries(arr) {
    let set = new Set(arr)
    let newArr = [...set]
    return newArr
}

console.log(removeDoubleEntries(testArr))

//2
const testArr2 = [[1,1,2], [5,5,7]]

function make1D(arr) {
    let arr1D = [].concat(...arr)
    return arr1D
}

console.log(make1D(testArr2))