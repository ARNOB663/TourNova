import { Request ,Response } from 'express'
import  express  from "express"
const app = express() 
 
app.get("/",(req:Request,res:Response)=>{
  res.status(200).json({
    message:"welcome to TourNova Backend"
  })
})

export default app