import { Request, Response } from 'express';
import knex from '../database/connection';
import criptografar from '../uteis/criptografia';

class AuthController {

    async show(request: Request, response: Response) {
        try {
            const {
                email,
                senha,
            } = request.body;

            const dadosPsicologo = {
                email,
                senha
            }
            //verificando se existe o usuário cadastrado
            const PsicologoValido = await knex('psicologo').where('email', String(dadosPsicologo.email)).select('senha');

            //verifica usuário 
            if (!String(PsicologoValido)) {
                response.send('Email ou senha incorretos!')
            } else {
                //verifica senha
                if (PsicologoValido[0].senha != criptografar(String(dadosPsicologo.senha))) {
                    response.send('Email ou senha incorretos!')
                } else {
                    response.json(await knex('psicologo').where('email', String(dadosPsicologo.email)).first())
                }
            }

            return response;
        } catch (error: any) {
            return console.error(error);
        }
    }
}

export default AuthController