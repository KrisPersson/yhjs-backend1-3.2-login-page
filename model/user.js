const { userdata } = require('../db')

async function getEmail(username) {
    const search = await userdata.find({ username: username })
    if (search.length === 0) {
        return ""
    } else {
        return search[0].email
    }
}

async function deleteUser(username) {
    return await userdata.remove({ username: username })
}

module.exports = { getEmail, deleteUser }
