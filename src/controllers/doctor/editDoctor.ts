import { Request, Response } from "express";
import { update } from "../../models/doctorModel"

const editDoctor = async (req: Request, res: Response): Promise <any> => {
    const {id} = req.params
    const doctor = req.body
    
    doctor.id = +id

    const result = await update(doctor)

    if(!result)
        return res.status(401).json({
            error: "Erro ao atualizar médico"
        })

    return res.json({
        success: "Médico atualizado com sucesso!",
        user: result
    })
}

export default editDoctor