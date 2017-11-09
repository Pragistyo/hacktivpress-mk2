const express           = require('express')
const articleController = require('../controllers/articles')
const jwt               = require('../helpers/jwt')
const router            = express.Router()

router.get('/', articleController.all) //get all data
router.get('/:article', articleController.single)// get one data
router.get('/author/:author', articleController.author )// get by author
router.get('/category/:category', articleController.category)// get by category
router.post('/', jwt.isLogin,articleController.create)// create data (login)
router.put('/update/:article', jwt.isLogin,jwt.authUser,articleController.edit)// update data (login,hanya yang berhak) id user(token), is artikel
router.delete('/delete/:article', jwt.isLogin, jwt.authUser, articleController.remove)// remove data (login,hanya yang berhak) id user(token), is artikel


console.log('====================================');
console.log('masuk router articles');
console.log('====================================');
module.exports = router