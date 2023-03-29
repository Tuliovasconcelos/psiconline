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

  async create(request: Request, response: Response) {
    try {


      let aprovado_sn = 'N';
      let valor_consulta = 0;
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

  async createAbordagemPsicologo(request: Request, response: Response) {
    try {

      let ativo_sn = 'N';
      //pegando todos os dados da rota
      const {
        idPsicologo,
        idAbordagem
      } = request.body;

      //montando objeto com os dados
      const abordagemPsicologoData = {
        idPsicologo,
        idAbordagem,
        ativo_sn
      };

      //inserindo na tabela com knex
      const insertedAbordagemPsicologoData = await knex('abordagem_psicologo').insert(abordagemPsicologoData);

      //verificando se houve resultado
      insertedAbordagemPsicologoData ? response.json(insertedAbordagemPsicologoData) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }

  }

  async deleteAbordagemPsicologo(request: Request, response: Response) {
    try {

      //pegando id da rota
      const { id } = request.params;

      //deletando via knex passando id
      const deletedAbordagemPsicologo = await knex('abordagem_psicologo').where('id', id).delete();

      //verificando se houve exclusão
      deletedAbordagemPsicologo ? response.json(true) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }
  }

  async createEspecialidadePsicologo(request: Request, response: Response) {
    try {

      let ativo_sn = 'N';
      //pegando todos os dados da rota
      const {
        idPsicologo,
        idAbordagem
      } = request.body;

      //montando objeto com os dados
      const especialidadePsicologoData = {
        idPsicologo,
        idAbordagem,
        ativo_sn
      };

      //inserindo na tabela com knex
      const insertedEspecialidadePsicologo = await knex('psicologo').insert(especialidadePsicologoData);

      //verificando se houve resultado
      insertedEspecialidadePsicologo ? response.json(insertedEspecialidadePsicologo) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }

  }

  async deleteEspecialidadePsicologo(request: Request, response: Response) {
    try {

      //pegando id da rota
      const { id } = request.params;

      //deletando via knex passando id
      const deletedEspecialidadePsicologo = await knex('especialidade_psicologo').where('id', id).delete();

      //verificando se houve exclusão
      deletedEspecialidadePsicologo ? response.json(true) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }
  }

  async createAvaliacaoPsicologo(request: Request, response: Response) {
    try {

      //pegando todos os dados da rota
      const {
        idPsicologo,
        avaliacaoDs,
        nome,
        contato,
        email
      } = request.body;

      //montando objeto com os dados
      const avaliacaoPsicologoData = {
        idPsicologo,
        avaliacaoDs,
        nome,
        contato,
        email
      };

      //inserindo na tabela com knex
      const insertedAvaliacaoPsicologo = await knex('avaliacao_psicologo').insert(avaliacaoPsicologoData);

      //verificando se houve resultado
      insertedAvaliacaoPsicologo ? response.json(insertedAvaliacaoPsicologo) : response.json(false);

      return response
    } catch (error) {
      return console.error(error);
    }

  }

  async getAllAvaliacao(request: Request, response: Response) {

    try {
      const avaliacoesPsicologo = await knex('avaliacao_psicologo').select('avaliacao_psicologo.*');

      avaliacoesPsicologo ? response.json(avaliacoesPsicologo) : response.json(false);

      return response
    }
    catch (error) {
      return console.error(error);
    }
  }

  async getUnicAvaliacao(request: Request, response: Response) {
    try {
      const { id_psicologo } = request.params;

      const selectedAvaliacaoPsicologo = await knex('avaliacao_psicologo').where('id_psicologo', id_psicologo).first();

      selectedAvaliacaoPsicologo ? response.json(selectedAvaliacaoPsicologo) : response.json(false);

      return response

    } catch (error) {
      return console.error(error);
    }
  }

}

export default PsicologoController;
