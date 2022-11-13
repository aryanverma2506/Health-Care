import express from "express";
import cors from 'cors'
import patientsDetails from './api/patientDetails.js'
const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/helpingHand",patientsDetails)
app.use("*",(req,res)=>{res.status(404).json("Not found")})
export default app