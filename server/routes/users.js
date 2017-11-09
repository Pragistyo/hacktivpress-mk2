const express = require('express')
const userController = require('../controllers/users')
const jwt = require ('../helpers/jwt')
const router  = express.Router()

router.get('/', userController.all) // get all user
router.post('/register', userController.register)// register new user
router.post('/login', jwt.isLogin)// get token
router.delete('/:id', userController.remove)


console.log('====================================');
console.log('masuk router users');
console.log('====================================');
module.exports = router