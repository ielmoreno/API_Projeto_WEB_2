import { NextFunction, Request, Response } from "express"
import { remove } from "../../models/doctorModel"
import { Prisma } from "@prisma/client"

const deleteDoctor = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
        const {id}  = req.params
        const doctor =  await remove(+id)

        return res.json({
            message: "Médico removido com sucesso!", 
            doctor
        })
    } catch (error) {
        console.log(error)
        if(error instanceof Prisma.PrismaClientKnownRequestError){
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: "Médico não encontrado"
            })
        next(error)
    }
    }
}
export default deleteDoctor