import { celebrate, Segments, Joi } from 'celebrate';

export const storePsicologoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            email: Joi.string().required(),
            contato: Joi.string().required().length(11),
            senha: Joi.string().required(),
            crp: Joi.string().required(),
            aprovado_sn: Joi.string(),
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

export const storeAbordagemPsicologoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            id_psicologo: Joi.string().required(),
            id_abordagem: Joi.string().required(),
            ativo_sn: Joi.string().required()

        }),
    },
    {
        abortEarly: false,
    },
);


export const storeEspecialidadePsicologoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            id_psicologo: Joi.string().required(),
            id_especialidade: Joi.string().required(),
            ativo_sn: Joi.string().required()

        }),
    },
    {
        abortEarly: false,
    },
);

export const storeAvaliacaoPsicologoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            id_psicologo: Joi.string().required(),
            avaliacao_ds: Joi.string().required(),
            nome: Joi.string().required(),
            contato: Joi.string().required(),
            email: Joi.string().required()

        }),
    },
    {
        abortEarly: false,
    },
);