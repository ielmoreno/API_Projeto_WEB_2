import express from 'express';
import cors from 'cors';
import { PORT, HOST, ENVIRONMENT } from './config';
import welcome from './controllers/welcome';
import routeNotFounded from './controllers/routeNotFounded';
import doctorRouter from './routers/doctorRouter';
import pacienteRouter from './routers/pacienteRouter';
import consultaRouter from './routers/consultaRouter';
import errorHandler from './middlewares/errorHandler';
import logger from './middlewares/logger';

const app = express()
app.use(logger)
app.use(cors())
app.use(express.json())

app.get('/', welcome)
app.use('/medico', doctorRouter)
app.use('/paciente', pacienteRouter)
app.use('/consulta',consultaRouter)
app.use('*', routeNotFounded)

//app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)
  })