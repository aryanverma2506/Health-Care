import express from "express"
import fetchDetailsCtrl from './controller/fetchDetailsCtrl.js'
const router=express.Router()

router.route("/getpatients").get(async(req,res)=>{
    const data=await fetchDetailsCtrl.getapiPatients()
    console.log(data);
    res.send(data)
})
export default router