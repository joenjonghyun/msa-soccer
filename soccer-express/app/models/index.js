require('dotenv').config();
const { MONGO_URI } = process.env;
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = MONGO_URI
db.board = require('./board.model')(mongoose)
db.user = require('./user.model')(mongoose)
module.exports = db