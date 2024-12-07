import { NextFunction, Response, Request } from 'express'
import { getAll } from '../../models/consultaModel'

const consultaList = async (req: Request, res: Response) => {

    const consulta = await getAll()
    res.json(consulta)
}

export default consultaList