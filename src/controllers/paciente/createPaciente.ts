import { NextFunction, Request, Response } from "express"
import { create, validatePacienteToCreate } from "../../models/pacienteModel"
import { Prisma } from "@prisma/client"


const createPaciente = async (req: Request,res: Response,next: NextFunction): Promise <any> =>{
    try{
        const paciente = req.body
        const pacienteValidated = validatePacienteToCreate(paciente)

        if(pacienteValidated?.error){
            return res.status(400).json({
                    error: "Erro ao criar paciente, verifique os dados!",
                    fieldErrors: pacienteValidated.error.flatten().fieldErrors
            })
        }

        const result = await create(pacienteValidated.data) 

        if(!result)
            console.log(result)
            return res.status(500).json({
                error: "Erro ao criar paciente"
            })

        return res.json({
            success: "paciente criado com sucesso!",
            doctor: result
        })

    }catch(error){
        console.log(error)
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error?.code === 'P2002')
                return res.status(400).json({
                    error: "Erro ao criar paciente, verifique os dados!",
                    fieldErrors: { email: ['Email já cadastrado']}
                })
            
        }
        next(error)
    }
}

export default createPaciente