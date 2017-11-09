const user = require('../models/User')
const jwt  = require('jsonwebtoken')
var bcrypt = require('bcrypt')
var salt   = bcrypt.genSaltSync(saltRounds)
require('dotenv').config()

class UserClass {
    constructor() {
        
    }

    static all ( req, res ) {
        user.find({})
        .then( result => {
            res.send( result )
        })
        .catch(err => {
            res.send( err )
        })
    }
    static register( req, res ) {
        var hash = bcrypt.hashSync(req.body.password, salt)
        user.create({
            username: req.body.username,
            password: hash
        })
        .then( result => {
            res.send( result )
        })
        .catch( err => {
            res.send( err )
        })
    }
    static login( req, res ) {
        user.findOne({username:req.body.username})
        .then( result => {
            if (bcrypt.compareSync(req.body.password, result.password)) {
                var token = jwt.sign({
                    id: result._id,
                    username: result.username
                }, process.env.SECRET)
                res.send({token:token, msg:'token dibungkus'})
            } else {
                res.send('Wrong Password !!')
            }
        })
        .catch( err =>{
            res.send('Username Does not exist, please register !')
        })
    }
    static remove( req, res ) {
        user.remove()
        .then( result => {
            res.send( result )
        })
        .catch( err => {
            res.send( err )
        })
    }
}

module.exports = UserClass