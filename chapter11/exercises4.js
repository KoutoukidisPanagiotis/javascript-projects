const testArr = [1, 1, 2, 3, 4, 5, 6, 7, 7, 10];
const testArr2 = [2, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];

//1
function make2D(arr, size) {
    let arr2D = [];
    for (let i = 0; i < arr.length; i += size) {
        const subarray = arr.slice(i, i + size);
        arr2D.push(subarray);
    }
    return arr2D;
}

console.log(make2D(testArr, 2));

//2
function arrayFromCommonElements(arr1, arr2) {
    let arrayWithDoubleEntries = arr1.filter(element => arr2.includes(element))
    let set = new Set(arrayWithDoubleEntries)
    let newArr = [...set]
    return newArr
}
console.log(arrayFromCommonElements(testArr, testArr2))
