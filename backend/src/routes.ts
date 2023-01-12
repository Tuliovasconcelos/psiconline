import express from 'express';

//validadores de campos
import { storePsicologoValidator } from './validators/PsicologoValidator';
import { storeAbordagemPsicologoValidator } from './validators/PsicologoValidator';
import { storeEspecialidadePsicologoValidator } from './validators/PsicologoValidator';
import { storeAvaliacaoPsicologoValidator } from './validators/PsicologoValidator';
import { storeEspecialidadeValidator } from './validators/EspecialidadeValidator';
import { storeAbordagemValidator } from './validators/AbordagemValidator';
import { storeDuvidaValidator } from './validators/DuvidaValidator';




//controllers
import PsicologoController from './controllers/PsicologoController';
import EspecialidadeController from './controllers/EspecialidadeController';
import AbordagemController from './controllers/AbordagemController';
import DuvidaController from './controllers/DuvidaController';

//instanciando
const psicologoController = new PsicologoController();
const especialidadeController = new EspecialidadeController();
const abordagemController = new AbordagemController();
const duvidaController = new DuvidaController();



const routes = express.Router();

//Rotas Psicologos
routes.post('/Psicologo/cadastrar', storePsicologoValidator, psicologoController.create);
routes.post('/Psicologo/cadastrarAbordagem', storeAbordagemPsicologoValidator, psicologoController.createAbordagemPsicologo);
routes.post('/Psicologo/cadastrarEspecialidade', storeEspecialidadePsicologoValidator, psicologoController.createEspecialidadePsicologo);
routes.post('/Psicologo/cadastrarAvaliacao', storeAvaliacaoPsicologoValidator, psicologoController.createAvaliacaoPsicologo);
routes.get('/Psicologo', psicologoController.getAll);
routes.get('/PsicologoAvaliacao', psicologoController.getAllAvaliacao);
routes.get('/Psicologo/:id', psicologoController.getUnic);
routes.get('/Psicologo/Avaliacao/:id', psicologoController.getUnicAvaliacao);
routes.delete('/Psicologo/:id', psicologoController.delete);
routes.delete('/Psicologo/abordagem/:id', psicologoController.deleteAbordagemPsicologo);
routes.delete('/Psicologo/especialidade/:id', psicologoController.deleteEspecialidadePsicologo);


//Rotas especialidades
routes.post('/Especialidade/cadastrar', storeEspecialidadeValidator, especialidadeController.create);
routes.get('/Especialidade', especialidadeController.getAll);
routes.get('/Especialidade/:id', especialidadeController.getUnic);
routes.delete('/Especialidade/:id', especialidadeController.delete);

//Rotas Abordagem
routes.post('/Abordagem/cadastrar', storeAbordagemValidator, abordagemController.create);
routes.get('/Abordagem', abordagemController.getAll);
routes.get('/Abordagem/:id', abordagemController.getUnic);
routes.delete('/Abordagem/:id', abordagemController.delete);

//Rotas Duvida
routes.post('/Duvida/cadastrar', storeDuvidaValidator, duvidaController.create);
routes.get('/Duvida', duvidaController.getAll);
routes.get('/Duvida/:id', duvidaController.getUnic);
routes.delete('/Duvida/:id', duvidaController.delete);

export default routes;
