import { Response, Request } from "express";
import { getByCrm } from "../../models/doctorModel"

const doctorByCrm = async (req: Request, res: Response): Promise <any> => {
    const {crm}  = req.params
    const doctor =  await getByCrm(crm)

    if(doctor)
        return res.json({
            message: "Doctor get by CRM", 
            doctor
        })
    else
        return res.status(404).json({
            error: "Médico não encontrado pelo CRM"
        })

}

export default doctorByCrm