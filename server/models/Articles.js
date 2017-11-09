const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        author: { type: Schema.ObjectId, ref: 'User' }
    },
    {timestamp:true}
)

var Article = mongoose.model('article', ArticleSchema)

module.exports = Article