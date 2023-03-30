const nedb = require('nedb-promises')
const userdata = new nedb({ filename: 'userdata.db', autoload: true })


module.exports = { userdata }
