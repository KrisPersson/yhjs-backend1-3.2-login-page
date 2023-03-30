const { userdata } = require('../db')

async function postLogin(userObj) {
    const searchResult = await userdata.find(userObj)
    return searchResult
}

module.exports = { postLogin }
