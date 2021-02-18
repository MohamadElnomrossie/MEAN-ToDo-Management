const mongoose=require('mongoose')
function connect(){
    mongoose.connect('mongodb://localhost:27017/todos', {useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.connection.once('open',()=>console.log("connected"))
}
module.exports={connect}