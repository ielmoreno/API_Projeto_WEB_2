import { NextFunction, Request, Response } from "express"


const routeNotFounded = (req: Request, res: Response) => { 
    res.status(404).json({message: "Rota não encontrada"})
}

export default routeNotFounded