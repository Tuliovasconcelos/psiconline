/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class EspecialidadeController {

  async getAll(request: Request, response: Response) {

    try {
      const especialidades = await knex('especialidade').select('especialidade.*');

      especialidades ? response.json(especialidades) : response.json(false);

      return response
    }
    catch (error) {
      return console.error(error);
    }
  }

  //Buscar Especialidade específico pelo ID
  async getUnic(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const selectedEspecialidade = await knex('especialidades').where('id', id).first();

      //verifando se houve resultado e retornando o Especialidade
      selectedEspecialidade ? response.json(selectedEspecialidade) : response.json(false);

      return response

    } catch (error) {
      return console.error(error);
    }
  }

  //cadastro de Especialidade
  async create(request: Request, response: Response) {
    try {

      //pegando todos os dados da rota
      const {
        descricao
      } = request.body;

      //montando objeto com os dados
      const especialidadeData = {
        descricao
      };

      //inserindo na tabela com knex
      const insertedEspecialidade = await knex('especialidade').insert(especialidadeData);

      //verificando se houve resultado
      insertedEspecialidade ? response.json(insertedEspecialidade) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }

  }

  //exclusão de Especialidade
  async delete(request: Request, response: Response) {
    try {

      //pegando id da rota
      const { id } = request.params;

      //deletando via knex passando id
      const deletedEspecialidade = await knex('especialidade').where('id', id).delete();

      //verificando se houve exclusão
      deletedEspecialidade ? response.json(true) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }
  }

}

export default EspecialidadeController;
