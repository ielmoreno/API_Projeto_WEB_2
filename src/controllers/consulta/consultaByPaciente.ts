import { Response, Request } from "express";
import { getByPaciente } from "../../models/consultaModel";



const consultaByDoctor = async (req: Request, res: Response): Promise <any> => {
    const {id}  = req.params
    const consulta =  await getByPaciente(+id)

    if(consulta)
        return res.json({
            message: "Consulta pelo ID do paciente", 
            consulta
        })
    else
        return res.status(404).json({
            error: "Consulta não encontrado pelo ID do paciente"
        })

}

export default consultaByDoctor