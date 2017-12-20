const mongoose = require('mongoose')
//just to unable advertises..
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo',{
    useMongoClient: true
})