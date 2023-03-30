const { Router } = require('express')
const router = Router()
const { getEmailCtrl, deleteUserCtrl } = require('../controllers/userController')
const { checkDeleteUserBody } = require('../middleware/middleware')


router.get('/email/:username', getEmailCtrl)
router.delete('/', checkDeleteUserBody, deleteUserCtrl)


module.exports = { userRouter: router }
