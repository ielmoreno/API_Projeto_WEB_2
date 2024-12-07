import express from 'express'
import createPaciente from '../controllers/paciente/createPaciente'
import pacienteList from '../controllers/paciente/pacienteList'
import pacienteById from '../controllers/paciente/pacienteById'
import pacienteByCpf from '../controllers/paciente/pacienteByCpf'
import pacienteByNome from '../controllers/paciente/pacienteByNome'
import editPaciente from '../controllers/paciente/editPaciente'
import editNamePaciente from '../controllers/paciente/editNamePaciente'
import deletePaciente from '../controllers/paciente/deletePaciente'

const router = express.Router()

router.post('/', createPaciente)                          // /paciente/  (inserir estrutura do paciente no body)
router.get('/list', pacienteList)                         // /paciente/list
router.get('/:id', pacienteById)                          // /paciente/idpesquisado
router.get('/cpf/:cpf', pacienteByCpf)                    // /paciente/cpf/cpfpesquisado
router.get('/nome/:nome', pacienteByNome)                 // /paciente/nome/nomedoCliente
router.put('/:id', editPaciente)                          // /paciente/idpesquisa (inserir estrutura do paciente no body)
router.patch('/:id', editNamePaciente)                    // /paciente/idpesquisa (inserir estrutura do paciente no body)
router.delete('/:id', deletePaciente)                     // /paciente/idpesquisa

export default router