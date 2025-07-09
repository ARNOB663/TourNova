import {  Request ,Response } from 'express'
import  express  from "express"
import cors from "cors"
import { router } from './routes'
import { globalErrorHandle } from './app/middleware/globalErrorHandler'
const app = express() 

app.use(express.json()) 
app.use(cors())

app.use("/api/v1",router)



app.get("/",(req:Request,res:Response)=>{
  res.status(200).json({
    message:"welcome to TourNova Backend"
  })
})


app.use(globalErrorHandle)


export default app