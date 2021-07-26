const express=require('express')
const router=express.Router()
router.get('/hhh',(req,res)=>{
    return res.json({message:"Success"})
})
module.exports=router