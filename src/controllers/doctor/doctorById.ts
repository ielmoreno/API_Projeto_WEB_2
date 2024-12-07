import { Response, Request } from "express";
import { getById } from "../../models/doctorModel"

const doctorById = async (req: Request, res: Response): Promise <any> => {
    const {id}  = req.params
    const doctor =  await getById(+id)

    if(doctor)
        return res.json({
            message: "Doctor get by id", 
            doctor
        })
    else
        return res.status(404).json({
            error: "Médico não encontrado pelo ID"
        })

}

export default doctorById