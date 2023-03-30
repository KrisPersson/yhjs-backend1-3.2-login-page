const { userdata } = require('../db')

async function postSignup(userObj) {
    const signUp = await userdata.insert({
        username: userObj.username,
        password: userObj.password,
        email: userObj.email
    })
    return signUp
}

module.exports = { postSignup }
