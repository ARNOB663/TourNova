import  httpStatus  from 'http-status-codes'
import { Response,Request } from 'express';
 

const notFound = (req:Request,res:Response)=>{

  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message:"Route Not Found"
  })
}

export default notFound