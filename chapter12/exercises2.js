//1
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
  
const usersUnder30 = users.filter(user => user.age < 30);
  
console.log(usersUnder30);

//2

const userNamesOnly = users.map(user => user.name )

console.log(userNamesOnly)