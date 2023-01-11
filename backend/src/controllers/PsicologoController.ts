/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class PsicologoController {

  async getAll(request: Request, response: Response) {

    try {
      const psicologos = await knex('psicologo').select('psicologo.*');

      psicologos ? response.json(psicologos) : response.json(false);

      return response
    }
    catch (error) {
      return console.error(error);
    }
  }

  //Buscar psicologo específico pelo ID
  async getUnic(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const selectedPsicologo = await knex('psicologo').where('id', id).first();

      //verifando se houve resultado e retornando o psicologo
      selectedPsicologo ? response.json(selectedPsicologo) : response.json(false);

      return response

    } catch (error) {
      return console.error(error);
    }
  }

  //cadastro de psicologo
  async create(request: Request, response: Response) {
    try {

      let aprovado_sn = 'N';
      let valor_consulta = '';
      let topicos = '';
      let publico = '';
      let sobre = '';
      let caminho_foto = '';
      //pegando todos os dados da rota
      const {
        nome,
        email,
        contato,
        senha,
        crp
      } = request.body;

      //montando objeto com os dados
      const psicologoData = {
        nome,
        email,
        contato,
        senha,
        crp,
        aprovado_sn,
        valor_consulta,
        topicos,
        publico,
        sobre,
        caminho_foto
      };

      //inserindo na tabela com knex
      const insertedPsicologo = await knex('psicologo').insert(psicologoData);

      //verificando se houve resultado
      insertedPsicologo ? response.json(insertedPsicologo) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }

  }

  //exclusão de psicologo
  async delete(request: Request, response: Response) {
    try {

      //pegando id da rota
      const { id } = request.params;

      //deletando via knex passando id
      const deletedPsicologo = await knex('psicologo').where('id', id).delete();

      //verificando se houve exclusão
      deletedPsicologo ? response.json(true) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }
  }

}

export default PsicologoController;
