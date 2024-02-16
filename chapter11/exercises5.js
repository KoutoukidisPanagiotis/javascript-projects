const testObject = {
    firstname: 'Panagiotis',
    lastname: 'Koutoukidis',
    age: 27,
    city: 'Athens'
}
const testKeys =['firstname', 'age', 'profession', 'city']

//1
function objectWithSpecificKeys (object,keys) {
    const resultObject = {}

    keys.forEach(key => {
        if (object.hasOwnProperty(key)) {
            resultObject[key] = object[key]
        }
    })
    return resultObject
}

console.log(objectWithSpecificKeys(testObject,testKeys))

//2
function doubleNumber (num) {
    if (typeof num === 'number') {
        return num * 2
    }   return num
}

function mapObject (object, mappingFunction) {
    const resultObject = {}
    for (const key in object) {
        resultObject[key] = mappingFunction(object[key])
    }
    return resultObject
}

console.log(mapObject(testObject,doubleNumber))