// Variables
const x = 1
let y = 5

console.log(x, y)   // se imprime 1, 5
y += 10
console.log(x, y)   // se imprime 1, 15
y = 'sometext'
console.log(x, y)   // se imprime 1, sometext
// x = 4               // provoca un error

// Arrays
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // se imprime 4
console.log(t[1])     // se imprime -1

t.forEach(value => {
  console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
})

// Objects
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

// Functions
const sum = (p1, p2) => { 
    console.log (p1) 
    console.log (p2) 
    return p1 + p2 
  }

const result = sum(1, 5)
console.log (result)

