const os = require('os')

// info about current user
const user = os.userInfo()
console.log('User: ', user)

// method returns the system uptime in seconds
const uptime = os.uptime()
console.log('The system uptime is', uptime / 60)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}

console.log('Current OS:', currentOS)
