const express = require('express')
const userController = require('../controllers/users')
const jwt = require ('../helpers/jwt')
const router  = express.Router()

router.get('/', userController.all) // get all user
router.post('/register', userController.register)// register new user
router.delete('/:id', userController.remove)
router.post('/login', jwt.isLogin)// get token


console.log('====================================');
console.log('masuk router users');
console.log('====================================');
module.exports = router