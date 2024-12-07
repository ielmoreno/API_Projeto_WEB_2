import { NextFunction, Response, Request } from 'express'
import { getAll } from '../../models/doctorModel'

const doctorList = async (req: Request, res: Response) => {

    const doctors = await getAll()
    res.json(doctors)
}

export default doctorList