import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { doctor } from './doctorModel'
import { paciente } from './pacienteModel'


const prisma = new PrismaClient()
const consultaSchema = z.object({
    id: z.number(),
    data_consulta: z.string().datetime(),
    doctor_id: z.number(),
    paciente_id: z.number()

})

export type getConsulta = {
    id: number,
    data_consulta: Date,
    medico: doctor,
    paciente: paciente
}

export type consulta = z.infer<typeof consultaSchema>

export const validateConsulta = (consulta: consulta) => {
    return consultaSchema.safeParse(consulta)
}

export const validateConsultaToCreate = (consulta: consulta) => {
    const partialDoctorSchema = consultaSchema.partial({
        id: true
    })
    return partialDoctorSchema.safeParse(consulta)
}

export const getAll = async () => {
    const consultas = await prisma.consulta.findMany({
        select: {
            id: true,
            data_consulta:true,
            doctor_id: true,
            paciente_id: true,
        }
    })
    
    return consultas
}

export const getById = async (id: number) => {
    const consulta = await prisma.consulta.findUnique({
        where: {
           id 
        },
        select: {
            id: true,
            data_consulta:true,
            doctor_id: true,
            paciente_id: true,
        }
    })
    return consulta
}

export const getByDoctor = async (doctor_id: number) => {
    const consulta = await prisma.consulta.findMany({
        where: {
            doctor_id 
         },
         select: {
             id: true,
             data_consulta:true,
             doctor_id: true,
             paciente_id: true,
         }
    })
    return consulta
}

export const getByPaciente = async (paciente_id: number) => {
    const consulta = await prisma.consulta.findMany({
        where: {
            paciente_id 
         },
         select: {
             id: true,
             data_consulta:true,
             doctor_id: true,
             paciente_id: true,
         }
    })
    return consulta
}

export const getByData = async (data_consulta: string) => {
    console.log(data_consulta)
    const consulta = await prisma.consulta.findMany({
        where: {
            data_consulta:{
                gte:new Date(data_consulta+'T00:00:00.000Z'),
                lte:new Date(data_consulta+'T23:59:59.999Z')
            }
         },
         select: {
             id: true,
             data_consulta:true,
             doctor_id: true,
             paciente_id: true,
         }
    })
    return consulta
}

export const create = async (consulta: Omit<consulta, "id">) => {
    const result = await prisma.consulta.create({
        data: consulta,
        select: {
            id: true,
        }
    })
    return result
}

export const remove = async (id: number) => {
    const consulta = await prisma.consulta.delete({
        where: {
           id 
        },
        select: {
            id: true,
            data_consulta: true,
            doctor_id: true,
            paciente_id: true
        }
    })
    return consulta
}

export const update = async (consulta: consulta) => {
    const result = await prisma.consulta.update({
        where: {
            id: consulta.id
        },
        data: consulta,
        select: {
            id: true,
            data_consulta:true,
            doctor_id: true,
            paciente_id: true,
        }
    })
    return result
}


