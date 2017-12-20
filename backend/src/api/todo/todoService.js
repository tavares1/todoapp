const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
Todo.updateOptions({new: true, runValitadors: true})

module.exports = Todo