// Common JS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum code)
const sayHi = (name) => {
  console.log(`Hello there, ${name}`)
}

module.exports = sayHi
