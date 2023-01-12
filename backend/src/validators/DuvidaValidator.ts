import { celebrate, Segments, Joi } from 'celebrate';

export const storeDuvidaValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().required(),
            resposta: Joi.string().required()
        }),
    },
    {
        abortEarly: false,
    },
);
