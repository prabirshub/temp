//CommonJs, every file is module (by default)
//Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data)

// sayHi('Prabir')
// sayHi(names.jaya)
// sayHi(names.neel)
