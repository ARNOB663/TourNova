/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status-codes"
import { UserService } from "./user.service";

//Create user
const createUser = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const user = await UserService.createUser(req.body)

        res.status(httpStatus.CREATED).json({
            message:"User Created Success Fully",
            user
        })
    }
    catch(err: any){
       next(err)
    }
} 
export const UserControllers = {
    createUser
}