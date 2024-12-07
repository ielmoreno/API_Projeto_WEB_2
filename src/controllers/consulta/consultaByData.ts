import { Response, Request } from "express";
import { getByData } from "../../models/consultaModel";



const consultaByDoctor = async (req: Request, res: Response): Promise <any> => {
    const {date}  = req.params
    const consulta =  await getByData(date)

    if(consulta)
        return res.json({
            message: "Consulta pela data", 
            consulta
        })
    else
        return res.status(404).json({
            error: "Consulta não encontrado pela data"
        })

}

export default consultaByDoctor