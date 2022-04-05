const { write } = require('../controllers/user.controller');
module.exports = x => x.app.post(`${x.url}/write`, write) ;