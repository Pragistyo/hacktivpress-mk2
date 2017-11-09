const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username: {
            type: String,
            uniques:true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {timestamps:true}
)

var Users = mongoose.model('User', userSchema)

module.exports = Users




