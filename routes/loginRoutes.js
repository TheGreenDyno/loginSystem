const express = require('express')
const router = express.Router()
const { displayLogin,handleLogin } = require('../controllers/loginControllers')

router.get('/', displayLogin)
router.post('/',handleLogin)

module.exports= router

