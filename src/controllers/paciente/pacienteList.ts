import { NextFunction, Response, Request } from 'express'
import { getAll } from '../../models/pacienteModel'

const pacienteList = async (req: Request, res: Response) => {

    const paciente = await getAll()
    res.json(paciente)
}

export default pacienteList