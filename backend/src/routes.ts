import express from 'express';

//validadores de campos
import { storePsicologoValidator } from './validators/PsicologoValidator';

//controllers
import PsicologoController from './controllers/PsicologoController';

//instanciando
const psicologoController = new PsicologoController();


const routes = express.Router();

//Rotas Psicologos
routes.post('/Psicologo/cadastrar', storePsicologoValidator, psicologoController.create,);
routes.get('/Psicologo', psicologoController.getAll);
routes.get('/Psicologo/:id', psicologoController.getUnic);
routes.delete('/Psicologo/:id', psicologoController.delete);

export default routes;
