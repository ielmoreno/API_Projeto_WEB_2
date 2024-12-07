import { NextFunction, Request, Response } from "express"
import { create, validateConsultaToCreate } from "../../models/consultaModel"
import { Prisma } from "@prisma/client"


const createConsulta = async (req: Request,res: Response,next: NextFunction): Promise <any> =>{
    try{
        const consulta = req.body
        const consultaValidated = validateConsultaToCreate(consulta)

        if(consultaValidated?.error){
            return res.status(400).json({
                    error: "Erro ao criar paciente, verifique os dados!",
                    fieldErrors: consultaValidated.error.flatten().fieldErrors
            })
        }

        const result = await create(consultaValidated.data) 

        if(!result)
            return res.status(500).json({
                error: "Erro ao criar consulta"
            })

        return res.json({
            success: "Consulta criado com sucesso!",
            doctor: result
        })

    }catch(error){
        console.log(error)
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error?.code === 'P2002')
                return res.status(400).json({
                    error: "Erro ao criar consulta, verifique os dados!",
                    fieldErrors: { email: ['Email já cadastrado']}
                })
            
        }
        next(error)
    }
}

export default createConsulta