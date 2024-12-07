import { NextFunction, Response, Request } from "express"

const logger = (req: Request, res: Response, next: NextFunction) => {
    
    console.log(`${new Date(Date.now()).toLocaleString()} ${req.method} ${req.url}`)
    next()
}

export default logger