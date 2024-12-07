import { Response, Request } from "express";
import { getByCpf } from "../../models/pacienteModel";

const pacienteByCpf = async (req: Request, res: Response): Promise <any> => {
    const {cpf}  = req.params
    const paciente =  await getByCpf(cpf)

    if(paciente)
        return res.json({
            message: "Paciente pelo cpf", 
            paciente
        })
    else
        return res.status(404).json({
            error: "Paciente não encontrado pelo CPF"
        })

}

export default pacienteByCpf