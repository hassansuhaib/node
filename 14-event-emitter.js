const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`Data received with Name: ${name} and Id: ${id}`)
})

customEmitter.on('response', () => {
  console.log('This event was emitted')
})

customEmitter.emit('response', 'John', '22')
