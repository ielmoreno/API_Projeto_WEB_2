import { Response, Request } from "express";
import { update } from "../../models/pacienteModel"

const editNamePaciente = async (req: Request, res: Response): Promise <any> => {
    const {id} = req.params
    const paciente = req.body
    
    paciente.id = +id

    const result = await update(paciente)

    if(!result)
        return res.status(401).json({
            error: "Erro ao criar paciente"
        })

    return res.json({
        success: "Paciente atualizado com sucesso!",
        user: result
    })
}

export default editNamePaciente