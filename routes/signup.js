const { Router } = require('express')
const router = Router()
const { checkSignupBody } = require('../middleware/middleware')
const { postSignupCtrl } = require('../controllers/signupController')


router.post('/', checkSignupBody, postSignupCtrl)

module.exports = { signupRouter: router }
