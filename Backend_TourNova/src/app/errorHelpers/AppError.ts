

class AppError extends Error {
 public statusCode: number;
  constructor(statusCode:number, message: string,stack =''){
     super(message) //thorow new error("something went wrong")
     this.statusCode = statusCode

     if(stack){
        this.stack = stack
     }
     else{
        Error.captureStackTrace(this,this.constructor)
     }
  }

}

export default AppError