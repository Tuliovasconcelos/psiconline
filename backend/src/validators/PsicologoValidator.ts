import { celebrate, Segments, Joi } from 'celebrate';

export const storePsicologoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            email: Joi.string().required(),
            contato: Joi.string().required().length(11),
            senha: Joi.string().required(),
            crp: Joi.string().required(),
            aprovado_sn: Joi.string().required(),
            valor_consulta: Joi.number(),
            topicos: Joi.string(),
            publico: Joi.string(),
            sobre: Joi.string(),
            caminho_foto: Joi.string(),

        }),
    },
    {
        abortEarly: false,
    },
);
