//1
const cities = ['Athens', 'London', 'Paris']
cities.push('Berlin')

cities.forEach(city => {
    console.log(city)
});

//2
const user = {
    name: 'Panagiotis',
    age: '27',
    city:'Athens',
    hello: function() {
        console.log('Hello ' + this.name )
    }
}
console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`)

user.hello()

//3
function findPizzaSize(r) {
   area = Math.pow(r, 2) * Math.PI
   return area
}

console.log(findPizzaSize(5))