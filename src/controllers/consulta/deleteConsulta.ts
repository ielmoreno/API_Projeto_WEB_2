import { NextFunction, Request, Response } from "express"
import { remove } from "../../models/consultaModel"
import { Prisma } from "@prisma/client"

const deleteConsulta = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
        const {id}  = req.params
        const consulta =  await remove(+id)

        return res.json({
            message: "Consulta removido com sucesso!", 
            consulta
        })
    } catch (error) {
        console.log(error)
        if(error instanceof Prisma.PrismaClientKnownRequestError){
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: "Consulta não encontrado"
            })
        next(error)
    }
    }
}
export default deleteConsulta