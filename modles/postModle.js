const mongoose = require('mongoose')
const schema = mongoose.schema; 

const postSchema = schema({
    title : {
        type : String, 
        require : true
    }, 
    status : {
        type : String, 
        default : "public"
    }, 
    description : {
        type : String, 
        require : true
    }, 
    creationDate : {
        type : Date, 
        default : Date.now()
    }
})

module.exports = mongoose.model('post', postSchema)