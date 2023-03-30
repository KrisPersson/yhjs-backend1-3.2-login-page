const { getEmail, deleteUser } = require('../model/user')

async function getEmailCtrl(request, response) {
    const username = request.params.username
    const email = await getEmail(username)

    if (email) {
        response.json({ success: true, email: email })
    } else {
        response.json({ success: false, message: 'No registered username matches ' + username })
    }
}

async function deleteUserCtrl(request, response) {
    const username = request.body.username
    const remove = await deleteUser(username)
    if (remove === 1) {
        response.json({ success: true, message: `User ${username} was successfully deleted` })
    } else {
        response.json({ success: false, message: `User ${username} does not exist` })
    }

}

module.exports = { getEmailCtrl, deleteUserCtrl }
