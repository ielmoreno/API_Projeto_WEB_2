import express from 'express'
import createDoctor from '../controllers/doctor/createDoctor'
import doctorList from '../controllers/doctor/doctorList'
import doctorById from '../controllers/doctor/doctorById'
import editNameDoctor from '../controllers/doctor/editNameDoctor'
import editDoctor from '../controllers/doctor/editNameDoctor'
import deleteDoctor from '../controllers/doctor/deleteDoctor'
import doctorByCrm from '../controllers/doctor/doctorByCRM'
import doctorByEspecialist from '../controllers/doctor/doctorByEspecialist'

const router = express.Router()

router.post('/', createDoctor)                                          // /medico/  (inserir estrutura do médico no body)
router.get('/list', doctorList)                                         // /medico/list
router.get('/:id', doctorById)                                          // /medico/idpesquisado
router.get('/crm/:crm', doctorByCrm)                                    // /medico/crm/crmpesquisado
router.get('/especialidade/:especialidade', doctorByEspecialist)        // /medico/especialidade/nomedaespecialidade
router.put('/:id', editDoctor)                                          // /medico/idpesquisa (inserir estrutura do médico no body)
router.patch('/:id', editNameDoctor)                                    // /medico/idpesquisa (inserir estrutura do médico no body)
router.delete('/:id', deleteDoctor)                                     // /medico/idpesquisa

export default router