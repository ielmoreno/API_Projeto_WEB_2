import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()
const doctorSchema = z.object({
    id: z.number(),
    nome: z.string(),
    sexo: z.number(),
    cpf: z.string(),
    telefone: z.string(),
    endereco: z.string(),
    data_nascimento: z.string().datetime(),
    email: z.string().nullable(),
    crm: z.string(),
    uf: z.string(),
    especialidade_1: z.string().nullable(),
    especialidade_2: z.string().nullable(),

})

export type doctor = z.infer<typeof doctorSchema>

export const validateDoctor = (doctor: doctor) => {
    return doctorSchema.safeParse(doctor)
}

export const validateDoctorToCreate = (doctor: doctor) => {
    const partialDoctorSchema = doctorSchema.partial({
        id: true
    })
    return partialDoctorSchema.safeParse(doctor)
}

export const getAll = async () => {
    const doctors = await prisma.doctor.findMany({
        select: {
            id: true,
            nome: true,
            sexo: true,
            crm: true,
            especialidade_1: true,
            especialidade_2: true,
        }
    })
    return doctors
}

export const getById = async (id: number) => {
    const doctor = await prisma.doctor.findUnique({
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
            crm: true,
            uf: true,
            especialidade_1: true,
            especialidade_2: true,
        }
    })
    return doctor
}

export const getByCrm = async (crm: string) => {
    const doctors = await prisma.doctor.findUnique({
        where: {
           crm
        },
        select: {
            id: true,
            nome: true,
            sexo: true,
            crm: true,
            especialidade_1: true,
            especialidade_2: true,
        }
    })
    return doctors
}

export const getByEspecialidade1 = async (especialidade: string) => {
    const doctors = await prisma.doctor.findMany({
        where: {
           especialidade_1: {
            contains:especialidade,
           }
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
            crm: true,
            uf: true,
            especialidade_1: true,
            especialidade_2: true,
        }
    })
    return doctors
}

export const getByEspecialidade2 = async (especialidade: string) => {
    const doctors = await prisma.doctor.findMany({
        where: {
           especialidade_2: especialidade,
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
            crm: true,
            uf: true,
            especialidade_1: true,
            especialidade_2: true,
        }
    })
    return doctors
}

export const create = async (doctor: Omit<doctor, "id">) => {
    const result = await prisma.doctor.create({
        data: doctor,
        select: {
            id: true,
        }
    })
    return result
}

export const remove = async (id: number) => {
    const doctor = await prisma.doctor.delete({
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
            crm: true,
            uf: true,
            especialidade_1: true,
            especialidade_2: true,
        }
    })
    return doctor
}

export const update = async (doctor: doctor) => {
    const result = await prisma.doctor.update({
        where: {
            id: doctor.id
        },
        data: doctor,
        select: {
            id: true,
            nome: true,
            sexo: true,
            cpf: true,
            telefone:true,
            endereco: true,
            data_nascimento: true,
            email: true,
            crm: true,
            uf: true,
            especialidade_1: true,
            especialidade_2: true,
        }
    })
    return result
}


