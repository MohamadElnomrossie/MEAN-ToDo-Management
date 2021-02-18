const mongoose=require('mongoose');
const schema=require('mongoose').Schema(
    {
        userId:
            {type:String,required:true},
        title:
            {type:String,required:true,},
        date:
            {type:Date,default:Date.now},
        body:
            {type:String,required:true},
        status:
            {type:Boolean,default:false},
        priority:
            {type:String,default:1,enum:['1','2','3','4']},
        updated:
            {type:Date,default:Date.now}
    }
)
const TODO=mongoose.model('todo',schema)

module.exports={TODO}