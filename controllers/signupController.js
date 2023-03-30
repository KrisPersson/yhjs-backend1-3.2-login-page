const { postSignup } = require('../model/signup')

async function postSignupCtrl(request, response) {
    const userObj = request.body
    const signup = await postSignup(userObj)

    response.json({ success: true, message: 'Successfully signed up as: ' + userObj.username })
}

module.exports = { postSignupCtrl }