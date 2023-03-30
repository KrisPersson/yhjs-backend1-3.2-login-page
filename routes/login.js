const { Router } = require('express')
const router = Router()

const { checkLoginBody } = require('../middleware/middleware')
const { postLoginCtrl } = require('../controllers/loginController')

router.post('/', checkLoginBody, postLoginCtrl)


module.exports = { loginRouter: router }
