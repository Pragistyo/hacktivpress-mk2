const articles = require('../models/Articles')

class ArticleClass {
    constructor() {
        
    }

    static all ( req, res ) {
        articles.find({})
        .populate('author', '_id username')
        .then( result => {
            res.send( result )
        })
        .catch( err =>{
            res.send( err )
        })
    }
    static single(req, res) {
        articles.findOne({_id:req.params.article})
        .then( result =>{
            res.send( result )
        })
        .catch(err => {
            res.send( err )
        })
    }
    static author(req, res) {
        articles.findOne({author: req.params.author})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    }
    static category(req, res) {
        articles.findOne({category: req.params.category})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    }
    static create(req, res) {
        articles.create({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            author: req.body.id_user
        })
        .then( result => {
            res.send( result )
        })
        .catch( err =>{
            res.send( err )
        })
    }
    static edit(req, res) {
        users.findOneAndUpdate(
            { _id: req.params.article, author: req.locals.id},
            {
                $set: {title: req.body.title, content: req.body.content}
            }
        )
        .then( result =>{
            res.send(result)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static remove(req, res) {
        articles.remove({_id: req.params.article})
        .then( result => {
            res.send(result)
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = ArticleClass