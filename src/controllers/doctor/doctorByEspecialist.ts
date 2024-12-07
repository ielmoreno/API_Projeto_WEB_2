import { Response, Request } from "express";
import { getByEspecialidade1, getByEspecialidade2, doctor } from "../../models/doctorModel"

const doctorByEspecialist = async (req: Request, res: Response): Promise <any> => {
    const {especialidade}  = req.params
    let doc1: doctor[] = await getByEspecialidade1(especialidade)
    let doc2: doctor[] = await getByEspecialidade2(especialidade)

    const doctors: doctor[] = doc1.concat(doc2);

    if(doctors.length > 0)
        return res.json({
            message: "Médico pela especialidade", 
            doctors
        })
    else
        return res.status(404).json({
            error: "Nenhum médico com esta especialidade foi encontrado"
        })

}

export default doctorByEspecialist