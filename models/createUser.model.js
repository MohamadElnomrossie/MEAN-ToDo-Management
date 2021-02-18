const mongoose=require('mongoose')
const schema=mongoose.Schema(
    {
        fname:
            {type:String, required:true},
        lname:
            {type:String, required:true},
        password:
            {type:String, required:true},
        email:
            {type:String, required:true},
        phone:
            {type:String, required:false},
        pic:
            {type:String, default:"img.jpg"}
    }
    )
const User=mongoose.model('user',schema)
module.exports={User}
