const express = require('express')
const { displaySignupPage, handleUserSignup } = require('../controllers/signupControllers')
const router = express.Router()

//routes comming from signupControllers
router.get('/', displaySignupPage)
router.post('/',handleUserSignup)



module.exports = router