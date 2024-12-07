import { Request, Response } from "express";
import { update } from "../../models/consultaModel"

const editConsulta = async (req: Request, res: Response): Promise <any> => {
    const {id} = req.params
    const consulta = req.body
    
    consulta.id = +id

    const result = await update(consulta)

    if(!result)
        return res.status(401).json({
            error: "Erro ao atualizar consulta"
        })

    return res.json({
        success: "Consulta atualizado com sucesso!",
        user: result
    })
}

export default editConsulta