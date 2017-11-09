const express = require('express')
const articleController = require('../controllers/articles')
const router = express.Router()

router.get('/', articleController.all) //get all data
router.get('/:article', articleController.single)// get one data
router.get('/author/:author', articleController.author )// get by author
router.get('/category/:category', articleController.category)// get by category
router.get('/')// update data
router.post('/')// create data
router.delete('/')// remove data


console.log('====================================');
console.log('masuk router articles');
console.log('====================================');
module.exports = router