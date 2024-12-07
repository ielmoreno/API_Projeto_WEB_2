import { NextFunction, Request, Response } from "express"
import { remove } from "../../models/pacienteModel"
import { Prisma } from "@prisma/client"

const deletePaciente = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
        const {id}  = req.params
        const paciente =  await remove(+id)

        return res.json({
            message: "Paciente removido com sucesso!", 
            paciente
        })
    } catch (error) {
        console.log(error)
        if(error instanceof Prisma.PrismaClientKnownRequestError){
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: "Paciente não encontrado"
            })
        next(error)
    }
    }
}
export default deletePaciente