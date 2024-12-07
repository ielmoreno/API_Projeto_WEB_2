import { Request, Response } from "express";
import { update } from "../../models/pacienteModel"

const editPaciente = async (req: Request, res: Response): Promise <any> => {
    const {id} = req.params
    const paciente = req.body
    
    paciente.id = +id

    const result = await update(paciente)

    if(!result)
        return res.status(401).json({
            error: "Erro ao atualizar médico"
        })

    return res.json({
        success: "Médico atualizado com sucesso!",
        user: result
    })
}

export default editPaciente