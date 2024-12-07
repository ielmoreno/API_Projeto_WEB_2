import express from 'express'
import deleteConsulta from '../controllers/consulta/deleteConsulta'
import consultaList from '../controllers/consulta/consultaList'
import createConsulta from '../controllers/consulta/createConsulta'
import consultaById from '../controllers/consulta/consultaById'
import consultaByDoctor from '../controllers/consulta/consultaByDoctor'
import consultaByPaciente from '../controllers/consulta/consultaByPaciente'
import consultaByData from '../controllers/consulta/consultaByData'
import editConsulta from '../controllers/consulta/editConsulta'

const router = express.Router()

router.post('/', createConsulta)                       // /consulta/  (inserir estrutura do consulta no body)
router.get('/list', consultaList)                      // /consulta/list
router.get('/:id', consultaById)                       // /consulta/idpesquisado
router.get('/medico/:id', consultaByDoctor)            // /consulta//medico/idmedico
router.get('/paciente/:id', consultaByPaciente)        // /consulta/paciente/idpaciente
router.get('/date/:date', consultaByData)              // /consulta/date/datamodelo(AAAA-MM-DD)
router.put('/:id', editConsulta)                       // /consulta/idpesquisa (inserir estrutura do consulta no body)
router.delete('/:id', deleteConsulta)                  // /consulta/idpesquisa

export default router