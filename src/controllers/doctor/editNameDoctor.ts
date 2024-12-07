import { Response, Request } from "express";
import { update } from "../../models/doctorModel"

const editNameDoctor = async (req: Request, res: Response): Promise <any> => {
    const {id} = req.params
    const doctor = req.body
    
    doctor.id = +id

    const result = await update(doctor)

    if(!result)
        return res.status(401).json({
            error: "Erro ao criar médico"
        })

    return res.json({
        success: "Médico atualizado com sucesso!",
        doctor: result
    })
}

export default editNameDoctor