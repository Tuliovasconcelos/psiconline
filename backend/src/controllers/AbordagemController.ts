/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class AbordagemController {

  async getAll(request: Request, response: Response) {

    try {
      const abordagem = await knex('abordagem').select('abordagem.*');

      abordagem ? response.json(abordagem) : response.json(false);

      return response
    }
    catch (error) {
      return console.error(error);
    }
  }

  //Buscar Abordagem específico pelo ID
  async getUnic(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const selectedAbordagem = await knex('abordagem').where('id', id).first();

      //verifando se houve resultado e retornando o Abordagem
      selectedAbordagem ? response.json(selectedAbordagem) : response.json(false);

      return response

    } catch (error) {
      return console.error(error);
    }
  }

  //cadastro de Abordagem
  async create(request: Request, response: Response) {
    try {

      //pegando todos os dados da rota
      const {
        descricao
      } = request.body;

      //montando objeto com os dados
      const AbordagemData = {
        descricao
      };

      //inserindo na tabela com knex
      const insertedAbordagem = await knex('abordagem').insert(AbordagemData);

      //verificando se houve resultado
      insertedAbordagem ? response.json(insertedAbordagem) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }

  }

  //exclusão de Abordagem
  async delete(request: Request, response: Response) {
    try {

      //pegando id da rota
      const { id } = request.params;

      //deletando via knex passando id
      const deletedAbordagem = await knex('abordagem').where('id', id).delete();

      //verificando se houve exclusão
      deletedAbordagem ? response.json(true) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }
  }

}

export default AbordagemController;
