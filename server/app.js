const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const morgan     = require('morgan');
const cors       = require('cors')
const app        = express()


mongoose.connect('mongodb://localhost/hacktivpress-mk2-Pragistyo', (err) =>{
    if(err) console.log('NOT CONNECT MONGO')
    console.log('MONGO CONNECT')
})

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const users = require('./routes/users')
const articles = require('./routes/articles')

app.use('/users', users)
app.use('/articles', articles)

app.listen(3010, () =>{
    console.log('3010 PORT')
})

module.exports = app


