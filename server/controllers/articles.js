const articles = require('../models/Articles')

class ArticleClass {
    constructor() {
        
    }

    static all ( req, res ) {
        articles.find({})
        .then( result => {
            res.send( result )
        })
        .catch( err =>{
            res.send( err )
        })
    }
    static single(req, res) {
        articles.findOne({})
    }
    static author(req, res) {
        articles.findOne({})
    }
    static category(req, res) {
        articles.findOne({})
    }
    static create(req, res) {
    }
    static edit(req, res) {
    }
    static remove(req, res) {
    }
}

module.exports = ArticleClass