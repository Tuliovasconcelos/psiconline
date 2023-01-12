/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class DuvidaController {

  async getAll(request: Request, response: Response) {

    try {
      const duvida = await knex('duvida').select('duvida.*');

      duvida ? response.json(duvida) : response.json(false);

      return response
    }
    catch (error) {
      return console.error(error);
    }
  }

  //Buscar Duvida específico pelo ID
  async getUnic(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const selectedDuvida = await knex('duvida').where('id', id).first();

      //verifando se houve resultado e retornando o Duvida
      selectedDuvida ? response.json(selectedDuvida) : response.json(false);

      return response

    } catch (error) {
      return console.error(error);
    }
  }

  //cadastro de Duvida
  async create(request: Request, response: Response) {
    try {

      //pegando todos os dados da rota
      const {
        descricao,
        resposta
      } = request.body;

      //montando objeto com os dados
      const DuvidaData = {
        descricao,
        resposta
      };

      //inserindo na tabela com knex
      const insertedDuvida = await knex('duvida').insert(DuvidaData);

      //verificando se houve resultado
      insertedDuvida ? response.json(insertedDuvida) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }

  }

  //exclusão de Duvida
  async delete(request: Request, response: Response) {
    try {

      //pegando id da rota
      const { id } = request.params;

      //deletando via knex passando id
      const deletedDuvida = await knex('duvida').where('id', id).delete();

      //verificando se houve exclusão
      deletedDuvida ? response.json(true) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }
  }

}

export default DuvidaController;
