import { NextFunction, Request, Response, ErrorRequestHandler } from "express"

const errorHandler = (err: ErrorRequestHandler, req:Request, res:Response, next:NextFunction)=> {

    if(err){
        console.log(err)
        return res.status(500).json({
            error: "Erro no servidor, tente novamente!"
        })
    }
}

export default errorHandler