import { Response, Request } from "express";
import { getById } from "../../models/pacienteModel"

const pacienteById = async (req: Request, res: Response): Promise <any> => {
    const {id}  = req.params
    const paciente =  await getById(+id)

    if(paciente)
        return res.json({
            message: "Paciente por ID", 
            paciente
        })
    else
        return res.status(404).json({
            error: "Paciente não encontrado pelo ID"
        })

}

export default pacienteById