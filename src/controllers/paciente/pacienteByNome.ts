import { Response, Request } from "express";
import { getByNome, paciente } from "../../models/pacienteModel";

const pacienteByNome = async (req: Request, res: Response): Promise <any> => {
    const {nome}  = req.params
    const paciente = await getByNome(nome);

    if(paciente.length > 0)
        return res.json({
            message: "Paciente encontrado pelo nome", 
            paciente
        })
    else
        return res.status(404).json({
            error: "Nenhum paciente com esta especialidade foi encontrado"
        })

}

export default pacienteByNome