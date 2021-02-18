const router=require('express').Router();
const bcrypt=require('bcrypt');
const { validateEmail, validateToken }=require('../middleware/validation')
const {User} = require('../models/createUser.model')
const jwt=require('jsonwebtoken')
const ObjectId = require('mongoose').Types.ObjectId;
//============================================================================================================
function __user({pic,_id,fname,lname,...ss}){
    return {fname,lname,pic,_id}
}
//============================================================================================================
router.post("/signup",validateEmail, async(req,res)=>{
   let {fname,lname,password,email,phone}=req.body
   let search=await User.find({email})
    if (search.length>=1)
    {
        res.status(403).json('Email exists in our records')
    }
    else
    {
        password=bcrypt.hashSync(password+email,10)
        const user=await User({fname,lname,password,email,phone,phone})
        await user.save()
        res.status(201).json('Created Successfully')
    }
})
//============================================================================================================
router.post('/login', validateEmail,async(req,res)=>{
    let {email,password}=req.body
    password=password+email
    let user=await User.findOne({email})
    if(!user){
        res.status(404).json("User not found")
    }
    else if (!bcrypt.compareSync(password,user.password)){
        res.status(403).json('Invalid Password')
    }
    else{
        user=__user(user)
        user['token']=jwt.sign(user,'trial')
        res.status(200).json(user)
    }
})
//=====================================================================================================
router.put('/profile',validateEmail,validateToken,async(req,res)=>{
    let _id=res.id
    let {fname,lname,password,email,phone,pic}=req.body
    password=password+email
    _id=new ObjectId(_id)
    let user=await User.findOne({_id})
    user.fname=fname
    user.lname=lname
    user.email=email
    user.phone=phone
    user.pic=pic
    console.log(password);
    if(password)
    {
        if (bcrypt.compareSync(password,user.password))
        {
        user.password=password
        }
    else{
        await user.save()
        res.status(200).json(__user(user))
    }
}

})
module.exports ={router}