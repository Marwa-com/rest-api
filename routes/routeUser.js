const express= require('express')
const router = express.Router()
const user =require('../models/Userschéma')

//RETURN ALL USERS @ get
router.get('/',(req,res)=> {
    user.find({},(err,data)=> { 
    err ?  console.log(err) : res.json(data)
})
})

//ADD A NEW USER TO THE DATABASE  @ post

router.post('/newuser',(req,res)=> {
    let newuser = new user (req.body)
    newuser.save((err,data)=> { 
    err ?  console.log(err) : res.send('newuser was created')
    })
})

//EDIT A USER BY ID @ put
router.put('/:id',(req,res)=> {
    user.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{ 
        err ?  console.log(err) : res.json({msg:"user was updated"})
    })  
})

//REMOVE A USER BY ID @ DELETE
router.delete('/:id',(req,res)=> {
    user.findByIdAndDelete({_id:req.params.id},(err,data)=> { 
        err ?  console.log(err) : res.json(data)
    }) })

module.exports=router