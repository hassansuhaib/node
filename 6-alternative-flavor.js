module.exports.items = ['item1', 'item2']

const person = {
  name: 'bob',
}

// We can do this because module is an object and we set an object's property in this way
module.exports.singlePerson = person
