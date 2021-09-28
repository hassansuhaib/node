const path = require('path')

console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'text.txt')
console.log(filepath)

// To get the base filename from the path
const base = path.basename(filepath)
console.log(base)

// To get the absolute file path
const absoulte = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log('Absolute path:', absoulte)
