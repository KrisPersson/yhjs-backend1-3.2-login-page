const { json } = require('express')
const { postLogin } = require('../model/login')

async function postLoginCtrl(request, response) {
   const userObj = request.body
   const searchResult = await postLogin(userObj)

   if (searchResult.length > 0) {
    response.json({ success: true, message: 'Logged in successfully as: ' + userObj.username })
   } else {
    response.status(400).json({ success: false, message: 'Login attempt failed. No matching username and/or password.' })
   }
}

module.exports = { postLoginCtrl }