import { NextFunction, Request, Response } from "express"
import { create, validateDoctorToCreate } from "../../models/doctorModel"
import { Prisma } from "@prisma/client"


const createDoctor = async (req: Request,res: Response,next: NextFunction): Promise <any> =>{
    try{
        const doctor = req.body
        const doctorValidated = validateDoctorToCreate(doctor)

        if(doctorValidated?.error){
            return res.status(400).json({
                    error: "Erro ao criar médico, verifique os dados!",
                    fieldErrors: doctorValidated.error.flatten().fieldErrors
            })
        }

        const result = await create(doctorValidated.data) 

        if(!result)
            return res.status(500).json({
                error: "Erro ao criar médico"
            })

        return res.json({
            success: "Médico criado com sucesso!",
            doctor: result
        })

    }catch(error){
        console.log(error)
        // if(error instanceof Prisma.PrismaClientKnownRequestError){
        //     if(error?.code === 'P2002')
        //         return res.status(400).json({
        //             error: "Erro ao criar médico, verifique os dados!",
        //             fieldErrors: { email: ['Email já cadastrado']}
        //         })
            
        // }
        next(error)
    }
}

export default createDoctor


