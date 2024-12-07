import { Response, Request } from "express";
import { getById } from "../../models/consultaModel"

const consultaById = async (req: Request, res: Response): Promise <any> => {
    const {id}  = req.params
    const consulta =  await getById(+id)

    if(consulta)
        return res.json({
            message: "Consulta pelo ID", 
            consulta
        })
    else
        return res.status(404).json({
            error: "Consulta não encontrado pelo ID"
        })

}

export default consultaById