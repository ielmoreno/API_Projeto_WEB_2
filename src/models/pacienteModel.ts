import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()
const pacienteSchema = z.object({
    id: z.number(),
    nome: z.string(),
    sexo: z.number(),
    cpf: z.string(),
    telefone: z.string(),
    endereco: z.string().nullable(),
    data_nascimento: z.string().datetime(),
    email: z.string().nullable(),
})

export type paciente = z.infer<typeof pacienteSchema>

export const validatePaciente = (paciente: paciente) => {
    return pacienteSchema.safeParse(paciente)
}

export const validatePacienteToCreate = (paciente: paciente) => {
    const partialDoctorSchema = pacienteSchema.partial({
        id: true
    })
    return partialDoctorSchema.safeParse(paciente)
}

export const getAll = async () => {
    const paciente = await prisma.paciente.findMany({
        select: {
            id: true,
            nome: true,
            sexo: true,
            telefone: true
        }
    })
    return paciente
}

export const getById = async (id: number) => {
    const paciente = await prisma.paciente.findUnique({
        where: {
           id 
        },
        select: {
            id: true,
            nome: true,
            sexo: true,
            cpf: true,
            telefone:true,
            endereco: true,
            data_nascimento: true,
            email: true,
        }
    })
    return paciente
}

export const create = async (paciente: Omit<paciente, "id">) => {
    const result = await prisma.paciente.create({
        data: paciente,
        select: {
            id: true,
        }
    })
    return result
}

export const remove = async (id: number) => {
    const paciente = await prisma.paciente.delete({
        where: {
           id 
        },
        select: {
            id: true,
            nome: true,
            sexo: true,
            cpf: true,
            telefone:true,
            endereco: true,
            data_nascimento: true,
            email: true,
        }
    })
    return paciente
}

export const update = async (paciente: paciente) => {
    const result = await prisma.paciente.update({
        where: {
            id: paciente.id
        },
        data: paciente,
        select: {
            id: true,
            nome: true,
            sexo: true,
            cpf: true,
            telefone:true,
            endereco: true,
            data_nascimento: true,
            email: true
        }
    })
    return result
}

export const getByCpf = async (cpf: string) => {
    const paciente = await prisma.paciente.findUnique({
        where: {
            cpf
        },
        select: {
            id: true,
            nome: true,
            sexo: true,
            telefone:true,

        }
    })
    return paciente
}

export const getByNome = async (nome: string) => {
    const paciente = await prisma.paciente.findMany({
        where: {
            nome:{
                contains:nome
            }
        },
        select: {
            id: true,
            nome: true,
            sexo: true,
            telefone: true
        }
    })
    return paciente
}