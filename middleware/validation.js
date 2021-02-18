const jwt=require('jsonwebtoken');
const { userInfo } = require('os');
function validateEmail (req,res,next){
    const {email}=req.body
    const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.toString().match(mailFormat))
    {
        res.status(406).json("Enter a valid email")}
    else{
        next()
    }
}
function validateToken(req,res,next){
    try{
    let token=req.headers.authorization.split(" ")[1]
    user=jwt.verify(token,'trial')
    if (user){
        res['id']=user['_id']
        next()
    } 
}
catch(err){
    res.status(403).json('Invalid Credentials')
}}
module.exports={validateEmail,validateToken}