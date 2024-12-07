import { Response, Request } from "express";
import { getByDoctor } from "../../models/consultaModel";


const consultaByDoctor = async (req: Request, res: Response): Promise <any> => {
    const {id}  = req.params
    const consulta =  await getByDoctor(+id)

    if(consulta)
        return res.json({
            message: "Consulta pelo ID do médico", 
            consulta
        })
    else
        return res.status(404).json({
            error: "Consulta não encontrado pelo ID do médico"
        })

}

export default consultaByDoctor