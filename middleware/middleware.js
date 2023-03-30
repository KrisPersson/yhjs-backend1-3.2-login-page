
async function checkLoginBody(request, response, next) {

    const userObj = request.body
    if (!userObj.hasOwnProperty('username') ||
        !userObj.hasOwnProperty('password') 
    ) {
        response.status(400).json({ success: false, message: 'Wrong data in body.' })
    } else {
        next()
    }
}

async function checkSignupBody(request, response, next) {

    const userObj = request.body

    if (!userObj.hasOwnProperty('username') || 
        !userObj.hasOwnProperty('password') ||
        !userObj.hasOwnProperty('email')
    ) {
        response.status(400).json({ success: false, message: 'Wrong data in body.' })
    } else {
        next()
    }
}

async function checkGetEmailParams(request, response, next) {
    const username = request.params?.username


}

async function checkDeleteUserBody(request, response, next) {
    const username = request.params?.username
}

module.exports = { checkLoginBody, checkSignupBody, checkGetEmailParams, checkDeleteUserBody }
